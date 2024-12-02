const ctx = document.getElementById('financeChart').getContext('2d');
const financeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
            label: 'Amount ($)',
            data: [0, 0],
            backgroundColor: ['#28a745', '#dc3545'],
            borderColor: ['#28a745', '#dc3545'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let totalIncome = 0;
let totalExpense = 0;

document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (type === 'income') {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    document.getElementById('totalIncome').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpense').textContent = `$${totalExpense.toFixed(2)}`;
    document.getElementById('balance').textContent = `$${(totalIncome - totalExpense).toFixed(2)}`;

    financeChart.data.datasets[0].data = [totalIncome, totalExpense];
    financeChart.update();

    document.getElementById('transactionForm').reset();
});
