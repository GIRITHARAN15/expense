import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      title: "School bag",
      amount: 70,
      date: new Date(2018, 6, 23),
    },
    { id: "2", title: "New TV", amount: 999.50, date: new Date(2020, 5, 17) },
    {
      id: "3",
      title: "Bike Insurance",
      amount: 198.78,
      date: new Date(2019, 3, 18),
    },
    {
      id: "4",
      title: "New chair",
      amount: 250,
      date: new Date(2022, 6, 10),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
