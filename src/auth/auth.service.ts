import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  // Register a new user
  async register(userData: Partial<User>): Promise<User> {
    // Hash the user's password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Create a new user in the database
    const newUser = new this.userModel({
      ...userData,
      password: hashedPassword, // Save the hashed password
    });

    return await newUser.save();
  }

  // Validate a user's credentials
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  // Login and generate a JWT
  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
  
    // Find the user by email
    const user = await this.userModel.findOne({ email }).exec();
  
    if (!user) {
      throw new Error('Invalid credentials'); // User not found
    }
  
    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials'); // Password mismatch
    }
  
    // Generate the JWT payload
    const payload = { username: user.email, sub: user._id, role: user.role };
  
    // Return the access token
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}