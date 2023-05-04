import React, { lazy, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Chef.css';
import { Link, useNavigate } from 'react-router-dom';

const LazyImage = lazy(() => import('./LazyImage'));

const Chefs = ({ chef }) => {
    const navigate = useNavigate();
    const { id, chef_name, chef_pic_url, year_of_experience, number_of_recipes, likes } = chef;

    const handleViewRecipes = () => {
        navigate(`/chef/${chef.id}/recipes`);
    };

    return (
        <div>
            <Card className='mt-3 each-card' style={{ width: '18rem' }}>
                <LazyImage className="card-img" src={chef_pic_url} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        <p className='m-0'>Experience: {year_of_experience}</p>
                        <p className='m-0'>Recipes: {number_of_recipes} </p>
                    </Card.Text>
                    <Card.Text>
                        <p>Likes : {likes} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0ZM7.5 9.715c0 1.752 2.163 3.615 3.49 4.593c.454.335.681.502 1.01.502c.329 0 .556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593c0-2.677-2.475-3.677-4.5-1.609c-2.025-2.068-4.5-1.068-4.5 1.609Z" clip-rule="evenodd" /></svg></p>
                    </Card.Text>
                    <Link>
                        <Button onClick={handleViewRecipes} className='w-100 py-1 login mt-4' variant="secondary" size="lg" type="submit">
                            View Recipes
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chefs;