import React from 'react';
import { Accordion } from 'react-bootstrap';
import QA from '../../../assets/17973872.jpg';
import './FrequentQuestion.css';

const FrequentQuestion = () => {
    return (
        <div className='d-md-flex justify-content-center gap-5 align-items-center'>
            <div>
                <img width={300} src={QA} alt="" />
            </div>
            <div className='w-50'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='acc-header'>What are some popular Italian dishes?</Accordion.Header>
                        <Accordion.Body>
                        Some popular Italian dishes include pizza, pasta dishes such as spaghetti bolognese, lasagna, and carbonara, risotto, bruschetta, and tiramisu.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Are there any vegetarian or vegan Italian dishes?</Accordion.Header>
                        <Accordion.Body>
                        Yes, there are many vegetarian and vegan Italian dishes such as pasta with tomato sauce, caprese salad, minestrone soup, and vegan lasagna.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> What is the difference between spaghetti and linguine?</Accordion.Header>
                        <Accordion.Body>
                        Spaghetti is a long, thin pasta while linguine is slightly wider and flatter. Linguine also has a slightly chewier texture than spaghetti.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What are some popular Italian desserts?</Accordion.Header>
                        <Accordion.Body>
                        Some popular Italian desserts include tiramisu, cannoli, panna cotta, gelato, and biscotti.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FrequentQuestion;