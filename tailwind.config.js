/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        /**
         * 主色调：美乐蒂粉
         * 注意 Tailwind 需要完整类名才能被 JIT 扫描到，因此色阶保持标准命名。
         */
        brand: {
          50: '#FFF5F9',
          100: '#FFE8F2',
          200: '#FFD1E4',
          300: '#FFB6D5',
          400: '#FF95C2',
          500: '#FF77B0',
          600: '#F7599B',
          700: '#DE3D80',
        },
        /** 辅助色：美乐蒂的粉紫与奶油色 */
        melody: {
          lila: '#F3E8FF',
          liladeep: '#E6D6FF',
          cream: '#FFFBFD',
          creamdeep: '#FFF0F6',
        },
        /** 强调色：临近截止（保留橙色语义，但调得更柔和以适配粉色主题） */
        urgent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          600: '#EA8C1F',
          700: '#C2701A',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        // 粉色柔光阴影，替代生硬的灰黑阴影
        soft: '0 1px 2px rgba(190, 120, 160, 0.06), 0 4px 16px rgba(190, 120, 160, 0.08)',
        'soft-lg': '0 2px 4px rgba(190, 120, 160, 0.08), 0 12px 32px rgba(190, 120, 160, 0.14)',
        glow: '0 8px 24px rgba(247, 89, 155, 0.22)',
      },
      transitionDuration: {
        DEFAULT: '180ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-6px) scale(1.03)' },
        },
        'heart-float': {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.6)' },
          '35%': { opacity: '0.9' },
          '100%': { opacity: '0', transform: 'translateY(-28px) scale(1.1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 220ms ease-out both',
        'float-soft': 'float-soft 3.2s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 1.8s ease-in-out infinite',
        'heart-float': 'heart-float 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
};
