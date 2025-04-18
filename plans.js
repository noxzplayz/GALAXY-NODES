const plans = [
  { name: "Dirt", ram: "2GB", cpu: "100%", disk: "8GB", price: 79, original: 90 },
  { name: "Wood", ram: "4GB", cpu: "150%", disk: "12GB", price: 129, original: 180 },
  { name: "Cobblestone", ram: "6GB", cpu: "200%", disk: "15GB", price: 179, original: 270 },
  { name: "Stone", ram: "8GB", cpu: "250%", disk: "20GB", price: 249, original: 360 },
  { name: "Iron", ram: "10GB", cpu: "300%", disk: "30GB", price: 299, original: 450 },
  { name: "Gold", ram: "12GB", cpu: "350%", disk: "40GB", price: 399, original: 540 },
  { name: "Diamond", ram: "16GB", cpu: "400%", disk: "50GB", price: 499, original: 720 },
  { name: "Netherite", ram: "24GB", cpu: "450%", disk: "60GB", price: 799, original: 1080 },
  { name: "Ultimate", ram: "28GB", cpu: "500%", disk: "80GB", price: 899, original: 1280 },
  { name: "Supreme", ram: "32GB", cpu: "550%", disk: "100GB", price: 999, original: 1440 }
];

const container = document.querySelector('.plans-container');

plans.forEach(plan => {
  const card = document.createElement('div');
  card.className = 'plan-card';
  card.innerHTML = `
    <h3 class="plan-title">${plan.name} Plan</h3>
    <div class="plan-features">
      <p><strong>RAM:</strong> ${plan.ram}</p>
      <p><strong>CPU:</strong> ${plan.cpu}</p>
      <p><strong>Disk:</strong> ${plan.disk}</p>
    </div>
    <div class="plan-price">
      <del>₹${plan.original}</del> <strong>₹${plan.price}</strong> / month
    </div>
    <a href="checkout.html?plan=${plan.name}&price=${plan.price}" class="choose-btn">Choose Plan</a>
  `;
  container.appendChild(card);
});
