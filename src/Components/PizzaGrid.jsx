import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import img_1 from '../Images/image1.jpeg';
import img_2 from '../Images/image2.jpeg';
import img_3 from '../Images/image3.jpeg';
import img_4 from '../Images/image4.jpeg';
import img_5 from '../Images/image5.jpeg';
import img_6 from '../Images/image6.jpeg';
import img_7 from '../Images/image7.jpeg';
import img_8 from '../Images/image8.jpeg';

const pizzas = [
  {
    name: "Margherita",
    description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    price: "$8.99",
    image: img_1, // Replace with actual image URL
  },
  {
    name: "Pepperoni",
    description: "Delicious pepperoni pizza with mozzarella cheese.",
    price: "$9.99",
    image: img_2, 
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken with BBQ sauce, red onions, and cilantro.",
    price: "$10.99",
    image: img_3, 
  },
  {
    name: "Veggie Supreme",
    description: "Loaded with fresh vegetables, olives, and mozzarella cheese.",
    price: "$9.49",
    image: img_4,  

  },
  {
    name: "Hawaiian",
    description: "Ham, pineapple, mozzarella cheese, and tomato sauce.",
    price: "$8.49",
    image: img_5, 

  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, and ham with mozzarella cheese.",
    price: "$11.99",
    image: img_6, 
  },
  {
    name: "Buffalo Chicken",
    description: "Buffalo chicken, mozzarella cheese, and blue cheese dressing.",
    price: "$10.49",
    image: img_7, 

  },
  {
    name: "Four Cheese",
    description: "A mix of mozzarella, cheddar, parmesan, and blue cheese.",
    price: "$9.99",
    image: img_8, 

  },
];

const PizzaGrid = () => {
  return (
    <Box
  sx={{
    padding: '20px',
    maxWidth: { xs: '100%', md: '70%' },  // Full width on mobile, 70% on larger screens
    margin: { xs: '0', md: '0 auto' },    // No centering on mobile, center on larger screens
  }}
>
  <Grid container spacing={4}>
    {pizzas.map((pizza, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card>
          <CardMedia
            component="img"
            height="150"
            image={pizza.image}
            alt={pizza.name}
          />
          <CardContent>
            <Typography variant="h6">{pizza.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {pizza.description}
            </Typography>
            <Typography variant="h6" color="primary">
              {pizza.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


  );
};

export default PizzaGrid;
