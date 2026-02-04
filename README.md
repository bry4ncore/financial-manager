# 💰 Personal Finance Manager

**Take control of your money in a simple and straightforward way!** 🎉

This is a super friendly web app that helps you organize your personal finances without any hassle. Forget about confusing spreadsheets and apps full of features you'll never use - here you'll find exactly what you need to keep your budget in order!

## ✨ Why you'll love this app

- 🎯 **Easy to use** - Clean and intuitive interface that just works!
- 💸 **Full control** - Add your income and expenses in seconds
- 📊 **See your balance instantly** - Know exactly how much you have available
- 🏷️ **Organize by categories** - Health, food, transport, entertainment, and more!
- 🔍 **Filter as you like** - Quickly find what you're looking for
- 💾 **Your data always safe** - Everything automatically saved in your browser
- 📱 **Use anywhere** - Works perfectly on mobile, tablet, or computer
- ⚡ **Super fast** - Built with modern technologies for maximum performance

## 🎨 Made with love using

TypeScript, Vite, and lots of coffee ☕ - cutting-edge technologies to ensure a smooth and responsive experience!

---

## 📦 Technologies

- **TypeScript** - Static typing for robust code
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling
- **LocalStorage** - Data persistence

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:3000`

## 📝 How to Use

1. **Add Transaction**: Fill out the form with description, amount, category, type (income/expense), and date
2. **View Summary**: See your total income, total expenses, and balance at the top of the page
3. **Filter**: Use filters to view specific transactions by type or category
4. **Delete**: Click the "Delete" button on any transaction to remove it
5. **Clear All**: Use the "Clear All" button to remove all transactions

## 🏗️ Project Structure

```
financial-manager/
├── src/
│   ├── components/        # UI Components
│   │   ├── SummaryComponent.ts
│   │   ├── TransactionFormComponent.ts
│   │   ├── TransactionListComponent.ts
│   │   └── FiltersComponent.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── utils/            # Utilities
│   │   ├── store.ts
│   │   └── helpers.ts
│   ├── main.ts           # Application entry point
│   └── style.css         # Global styles
├── index.html            # Main HTML
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Available Categories

- Salary
- Food
- Transportation
- Entertainment
- Health
- Education
- Housing
- Bills
- Shopping
- Other

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Generate production build
- `npm run preview` - Preview production build

## 📱 Responsive Design

The app is fully responsive and works perfectly on:
- Desktop
- Tablet
- Mobile

## 💾 Data Persistence

All transactions are automatically saved in your browser's LocalStorage, ensuring your data is never lost when you reload the page.

## 📄 License

This project is open source and available for personal and educational use.

---

**Start organizing your financial life today and enjoy peace of mind!** 🚀
