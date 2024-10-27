// import { Container } from 'lucide-react';
import React from 'react';
import Container from '../ui/Container';

// Define the prop types using an interface
interface BlogPostProps {
    title: string;
    date: string;
    content: string;
}

// Component with type annotations for props
const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
    return (
        
        <Container>
        <div className="blog-post ml-3 mr-3 mt-0">
            <h2 className='text-2xl text-center font-semibold'>{title}</h2>
            <p className='text-center mt-2'><em>{date}</em></p>
            <p className='text-center mt-3 font-serif'>{content}</p>
        </div>
        </Container>
    );
}

export default BlogPost;
