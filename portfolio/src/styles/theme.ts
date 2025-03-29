import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  background: '#FFFFFF',
  text: '#1A1A1A',
  primary: '#007AFF',
  secondary: '#6B7280',
  accent: '#5856D6',
  border: '#E5E7EB',
  card: '#F3F4F6',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  gradient: 'linear-gradient(135deg, #007AFF, #5856D6)',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  info: '#3B82F6'
};

export const darkTheme: DefaultTheme = {
  background: '#0A0A0A',
  text: '#F3F4F6',
  primary: '#60A5FA',
  secondary: '#9CA3AF',
  accent: '#8B5CF6',
  border: '#374151',
  card: '#1F2937',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  gradient: 'linear-gradient(135deg, #60A5FA, #8B5CF6)',
  error: '#F87171',
  success: '#34D399',
  warning: '#FBBF24',
  info: '#60A5FA'
};

export type Theme = typeof lightTheme;

export const theme = darkTheme; // 기본 테마
