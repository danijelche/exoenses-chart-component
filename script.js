fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const { day, amount } = item;

      const chartElement = document.createElement("div");
      chartElement.classList.add("chart-element");
      chartElement.textContent = `${day}`;
      document.querySelector(".columns").appendChild(chartElement);

      const chartBar = document.createElement("div");
      chartBar.classList.add("column-chart");
		 if(day === "wed"){
		  chartBar.style.background = "var(--Cyan)";
		  chartBar.addEventListener("mouseover", ()=> {
		  chartBar.style.background = "hsla(186, 34%, 60%, .3)"
		  
		  })
		  chartBar.addEventListener("mouseout", ()=> {
			  chartBar.style.background = "var(--Cyan)";
	  })
	  }
	  
      chartBar.style.height = `${amount * 2}px`;
      chartElement.appendChild(chartBar);

      const chartPrice = document.createElement("div");
      chartPrice.classList.add("column-price");
      chartPrice.textContent = `$${amount}`;
      chartElement.appendChild(chartPrice);
	  
	   chartElement.addEventListener("mouseover", () => {
        chartPrice.style.display = "flex";
		
      });
	  chartElement.addEventListener("mouseout", () => {
        chartPrice.style.display = "none";
		
    });
  });
   });
