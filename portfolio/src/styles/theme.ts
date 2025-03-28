export const lightTheme = {
  background: '#ffffff',
  text: '#1e293b',
  primary: '#6366f1',
  secondary: '#475569',
  accent: '#818cf8',
  border: '#e2e8f0',
  card: '#f8fafc',
  selection: '#e2e8f0',
  muted: '#64748b',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  gradient: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

export const darkTheme = {
  background: '#0f172a',
  text: '#f8fafc',
  primary: '#818cf8',
  secondary: '#94a3b8',
  accent: '#6366f1',
  border: '#1e293b',
  card: '#1e293b',
  selection: '#334155',
  muted: '#64748b',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  gradient: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
};

export type Theme = typeof lightTheme;

export const theme = darkTheme; // 기본 테마
