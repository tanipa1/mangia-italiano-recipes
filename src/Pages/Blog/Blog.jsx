import React from 'react';
import SubBanner from '../../shared/SubBannerBlog/SubBannerBlog';
import { Button, Card, Container } from 'react-bootstrap';
import './Blog.css';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        
        <div>
            <SubBanner></SubBanner>
            <div className='d-flex justify-content-end mt-5 me-5'>
                <></>
                <div>
                    <Pdf targetRef={ref} filename="blog.pdf">
                        {({ toPdf }) => <button className='pdf' onClick={toPdf}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="red" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96c-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38l1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7c.52-10.07-.04-19.36-1.83-27.97c-3.3-18.59-16.45-29.46-33.02-30.13c-15.45-.63-29.65 8-33.28 21.37c-5.91 21.62-2.45 50.07 10.08 98.59c-15.96 38.05-37.05 82.66-51.2 107.54c-18.89 9.74-33.6 18.6-45.96 28.42c-16.3 12.97-26.48 26.3-29.28 40.3c-1.36 6.49.69 14.97 5.36 21.92c5.3 7.88 13.28 13 22.85 13.74c24.15 1.87 53.83-23.03 86.6-79.26c3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11c23.4-7.62 41.1-12.43 57.2-15.17c27.98 14.98 60.32 24.8 82.1 24.8c17.98 0 30.13-9.32 34.52-23.99c3.85-12.88.8-27.82-7.48-36.08c-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87c3.92-3.95 8-7.8 12.79-12.12c1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4l-8.12 12.93c-12.32 19.64-23.46 33.78-33 43c-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15a2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4l-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38c-.72-15.2.49-24.32 5.29-24.32c6.74 0 9.83 10.8 10.07 27.05c.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05l2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66l-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85c2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01l2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22l8.2-.6c23.3-1.73 39.8-.45 49.42 3.07c4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31a6.7 6.7 0 0 1-2.17 1.28z"/></svg> Generate Pdf <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="red" d="M24 24v4H8v-4H6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"/><path fill="red" d="m21 21l-1.414-1.414L17 22.172V14h-2v8.172l-2.586-2.586L11 21l5 5l5-5zm7-17V2h-6v10h2V8h3V6h-3V4h4zm-11 8h-4V2h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-2-2h2a1.001 1.001 0 0 0 1-1V5a1.001 1.001 0 0 0-1-1h-2zM9 2H4v10h2V9h3a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zM6 7V4h3l.001 3z"/></svg></button>}
                    </Pdf>
                </div>
            </div>
            <Container ref={ref} className='px-5 py-5'>
                <Card>
                    <Card.Header as="h5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg> Question - 1</Card.Header>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z" /></svg>
                            <span>Differences between uncontrolled and controlled components:</span></Card.Title>
                        <Card.Text className='mx-5'>
                            In the context of a system or process, uncontrolled components are those that operate without any regulation or intervention, while controlled components are those that are managed or adjusted to achieve a desired outcome.

                            Here are some key differences between uncontrolled and controlled components:

                            Regulation: Uncontrolled components operate without any regulation or intervention, while controlled components are managed or adjusted to achieve a desired outcome.

                            Predictability: Uncontrolled components are unpredictable and may produce inconsistent results, while controlled components are predictable and can produce consistent results.

                            Stability: Uncontrolled components may be less stable and more prone to fluctuations, while controlled components are designed to be stable and reliable.

                            Flexibility: Uncontrolled components may offer more flexibility and adaptability, while controlled components may be more rigid and less adaptable.

                            Impact: Uncontrolled components can have a significant impact on a system or process, while controlled components are designed to minimize their impact.

                            Examples of uncontrolled components include natural phenomena such as weather patterns or seismic activity, while examples of controlled components include regulated systems such as temperature control systems in buildings or automated manufacturing processes in factories.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg> Question - 2</Card.Header>
                    <Card.Body>
                        <Card.Title className='d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z" /></svg>
                            <span>How to validate React props using PropTypes?</span></Card.Title>
                        <Card.Text className='mx-5'>
                            React PropTypes is a library that provides a way to validate the types of props that a React component receives. It is a type-checking mechanism that helps ensure that the data passed into a component matches the expected data types and shapes, thus reducing the likelihood of bugs and errors.

                            To use PropTypes, you define the expected types of each prop in the component's propTypes object, along with any additional requirements such as being isRequired. Then, at runtime, React checks the props passed to the component against the defined PropTypes to ensure that they match. If a prop is of an unexpected type, React will issue a warning in the console, helping you catch and fix any potential issues.

                            PropTypes supports a variety of data types, including strings, numbers, booleans, arrays, objects, and more. You can also define custom validators for more complex data structures or specific validation requirements.

                            Using PropTypes can make your code more robust and easier to maintain, as it helps catch potential bugs early in development. It can also make your code more readable and self-documenting, as it provides a clear definition of the expected types and shapes of data passed to your components.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg> Question - 3</Card.Header>
                    <Card.Body>
                        <Card.Title className='d-flex alighn-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z" /></svg>
                            <span>Difference between nodejs and express js:</span></Card.Title>
                        <Card.Text className='mx-5'>
                            Node.js is a runtime environment for running JavaScript code, while Express.js is a web framework built on top of Node.js for building web applications and APIs. Express.js provides additional tools and features, such as routing and middleware mechanisms, to simplify the process of building web applications. Node.js provides the core functionality for running JavaScript code outside of a web browser and is more flexible, while Express.js provides a more structured approach and is easier to learn.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg> Question - 4</Card.Header>
                    <Card.Body>
                        <Card.Title className='d-flex alighn-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z" /></svg>
                            <span>What is a custom hook, and why will you create a custom hook?</span></Card.Title>
                        <Card.Text className='mx-5'>
                            In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks are created by extracting stateful logic from a component and moving it into a separate function that can be called from any other component. Custom hooks follow the naming convention of starting with the word "use", which allows React to identify them as hooks.

                            There are a few reasons why you might want to create a custom hook in React:

                            Reusability: Custom hooks allow you to reuse stateful logic across multiple components without having to repeat the same code in each component.

                            Encapsulation: Custom hooks help to encapsulate stateful logic within a single function, making it easier to reason about and maintain.

                            Composition: Custom hooks can be composed together to create more complex stateful logic that can be reused across multiple components.

                            Abstraction: Custom hooks can abstract away implementation details, making it easier to change the implementation of the logic without affecting the components that use it.

                            Overall, custom hooks provide a way to create reusable, encapsulated, and composable stateful logic that can simplify your React code and make it easier to maintain over time.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Blog;