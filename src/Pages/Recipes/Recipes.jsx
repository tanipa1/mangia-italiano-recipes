import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './Recipes.css';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [favorite, setFavorite] = useState(false)
    const { id } = useParams();


    const handleFavorite = () => {  
        toast(' Added to Favorite!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setFavorite(true);
        setClicked({ ...clicked, [recipes.id]: true });

    }
    const isFavorite = (recipe) => {
        return favoriteRecipes.some((favoriteRecipe) => favoriteRecipe.id === recipes.id);
    }

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://mangia-italiano-server-tanipa1.vercel.app/recipes');
                const data = await response.json();
                console.log(data);
                const filteredRecipes = data.filter((recipe) => recipe.chef_id == id);
                setRecipes(filteredRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [id]);

    return (
        <div className='recipe-container'>
            <ToastContainer />
            <div className='recipe-header'>
                {recipes.map((recipe) => (
                    recipe.chef_name ?
                        <>
                            <div key={recipe.id} className='sub-banner'>
                                <Container className='px-5 py-4 d-flex justify-content-around align-items-center'>
                                    <div>
                                        <h1 className=''>{recipe.chef_name}</h1>
                                        <p className='m-1'><span className='fw-semibold'>Bio:</span> {recipe.short_bio}</p>
                                        <p className='m-1'><span className='fw-semibold'>Experience:</span> {recipe.year_of_experience}</p>
                                        <p className='m-1'><span className='fw-semibold'>Special Recipes:</span> {recipe.number_of_recipes}</p>
                                        <p className='m-1'><span className='fw-semibold'>Likes:</span> {recipe.likes} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0ZM7.5 9.715c0 1.752 2.163 3.615 3.49 4.593c.454.335.681.502 1.01.502c.329 0 .556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593c0-2.677-2.475-3.677-4.5-1.609c-2.025-2.068-4.5-1.068-4.5 1.609Z" clip-rule="evenodd" /></svg></p>
                                    </div>
                                    <img width={300} className=' profile-picture rounded-circle' src={recipe.chef_pic_url} alt="" />
                                </Container>
                            </div>
                        </> : <></>
                ))}
            </div>
            <div className='divider'></div>
            <div className='recipes'>
                <h1 className='text-center my-4'>Recipes</h1>
                <div className='recipe-cards'>
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className='mb-4'>
                            <Container className='px-5'>
                                <Card>
                                    <Card.Header>
                                        <Card.Title className="text-center">{recipe.recipe_name}</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text className="px-5">
                                            <Card.Title>Ingredients:</Card.Title> {recipe.ingredients_list}
                                        </Card.Text>
                                        <Card.Text className="px-5">
                                            <Card.Title>Method of Cooking:</Card.Title> {recipe.method_of_cooking}
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer className="text-muted d-flex justify-content-around align-items-center gap-5">
                                        <div>
                                            <Button className='btn btn-success bg-dark'>Rating: {recipe.rating}</Button>
                                        </div>
                                        <div>
                                            <Button  onClick={()=> handleFavorite( )} className='bg-dark'
                                        disabled={favorite}>Add to Favorite
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Container>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recipes;