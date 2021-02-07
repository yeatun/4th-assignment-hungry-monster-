const getData = name =>{
    if(name != ''){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then (data => displayFoods(data.meals))
    .catch(error => alert('OPSS!no foods are matching'));}
    else{
        error();
    }
    }
    // foods list
    const displayFoods = foods => {
        const foodsItem = document.getElementById("all-foods");
    
        foods.forEach(food => {
            const foodDiv = document.createElement('div');
            foodDiv.className ="food";
        
            const foodInfo = `<div onclick="displayFoodsDetails('${food.strMeal}')">
                <img src = "${food.strMealThumb}">
                <h3>${food.strMeal}</h3>
                </div>
                `;
               foodDiv.value ='';
                foodDiv.innerHTML = foodInfo;
              foodsItem.appendChild(foodDiv);
        })
        
    }
  
//    for button
    document.getElementById('search-button').addEventListener('click',()=>{
        const selectFood =document.getElementById('select-food').value;
        getData(selectFood);
        
    })
    
    // showing Ingredient
    const displayFoodsDetails = listOfFood=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${listOfFood}`;
        fetch(url)
        .then(res => res.json())
        .then (data => renderFoodInfo(data.meals[0]))
      
    }
    
    const renderFoodInfo = food =>{
        const foodDetail = document.getElementById("foods-details");
        const foodDetailDiv = document.createElement('div');
        foodDetailDiv.className = 'food-detail';
        const allListOfFood =`
         <img src = "${food.strMealThumb}">
        <ul><h3> Ingredient </h3>
        <li> <p> <b> ${food.strIngredient1}</p> </li>
        <li> <p> <b> ${food.strIngredient2} </p> </li>
        <li> <p> <b> ${food.strIngredient3} </p> </li>
        <li> <p> <b> ${food.strIngredient4} </p> </li>
        <li> <p> <b> ${food.strIngredient5} </p> </li>
        <li> <p> <b> ${food.strIngredient6} </p> </li>
         <li> <p> <b> ${food.strIngredient7} </p> </li>
         <li> <p> <b> ${food.strIngredient8} </p> </li>
         <li> <p> <b> ${food.strIngredient9} </p> </li>
         <li> <p> <b> ${food.strIngredient10} </p> </li>
        </ul>
        
        `
        
        foodDetailDiv.innerHTML = allListOfFood;
        foodDetail.appendChild(foodDetailDiv);
    
    }