// src/components/Blog.jsx
// import React from 'react';
// import BlogPost from './BlogPost';
import Container from '../ui/Container';
import BlogPost from './BlogPost';
// import { Container } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "The History of Jewellery",
        date: "October 10, 2024",
        content: "Jewelry has been an important part of human culture for centuries. From ancient civilizations to modern fashion, it has symbolized wealth, power, and beauty."
    },
    {
        id: 2,
        title: "Choosing the Right Gemstone",
        date: "October 12, 2024",
        content: "Picking the perfect gemstone can be tricky. Whether it's a birthstone or a diamond for a special occasion, learn how to make the right choice."
    },
    {
        id: 3,
        title: "Jewellery Care Tips",
        date: "October 15, 2024",
        content: "Taking care of your jewelry is essential to maintain its beauty and longevity. Here are some tips to help you preserve your favorite pieces."
    },
    {
        id: 4,
        title: "The Jewellery Care Guide",
        date: "October 20, 2024",
        content: `
            A woman’s jewellery box is a reflection of her personality, holding pieces that she will cherish forever. However, it is essential to ensure that the contents of this box are well-preserved, protected from germs, and shielded from factors that could cause damage.
            
            Here are a few easy tips you can follow at home to keep your treasured jewellery clean and germ-free: '

            1. ** Avoid Wearing Jewellery While Washing Hands**: Wearing rings or other pieces while washing hands can dull their shine. Germs can also build up underneath them. It’s best to remove jewellery before washing and clean them separately.
            
            2. **Use Warm Water and Dish Solution**: For hard gemstones or solid gold, a simple mix of warm water and mild dish soap can restore their brilliance. Make it a habit to clean them once a week for optimal hygiene.
            
            3. **Soft Stones Need Special Care**: Jewellery with softer stones such as pearls, amber, turquoise, coral, moonstone, calcite, opal, kunzite, tourmaline, and emeralds can lose their lustre if washed with water. Gently wipe them with a soft cloth to preserve their beauty and cleanliness.
            
            4. **Silver Tarnish Remedies**: Silver pieces, known for their delicate sheen, tarnish easily. You can restore their sparkle with a mixture of lemon juice and water. Alternatively, a bit of toothpaste applied to the jewellery and wiped off with cotton can work wonders.
            
            5. **Kundan and Polki Jewellery Care**: Kundan Polki and Open Polki jewellery are particularly delicate and should be kept away from moisture. Use only a soft cloth to gently wipe these pieces, keeping their brilliance intact.
            
            6. **Store Your Jewellery Separately**: To maintain their shine, store each piece in its own airtight box or a zip-lock bag to prevent exposure to germs and moisture.
            
            7. **Avoid Sunlight and Heat Exposure**: Direct sunlight and heat can harm gemstones. Keep your jewellery away from prolonged exposure to preserve their beauty.
            
            8. **Keep Perfume Away**: Perfume can cause significant damage to your jewels. Always avoid spraying perfume directly onto your jewellery.
            
            9. **Pearl Care**: Pearls are especially prone to scratching. Use a soft cloth to gently clean their surface and maintain their germ-free, lustrous appearance.
        `
    }
];

const Blog = () => {
    return (
      <Container>
        <div className="blog-page bg-[#d1c4c4] rounded-2xl mt-0 mb-0">
          <div>
          <div className='mt-0'>
            <h1 className='text-center text-4xl font-mono'>Our Blogs</h1>
           
            <div className="blog-list  mt-1  ">
                {blogPosts.map(post => (
                    <BlogPost 

                        key={post.id}                        
                        title={post.title}                        
                        date={post.date} 
                        content={post.content} 
                  
                    />
                ))}
            </div>
            </div>
            </div>
        </div>
        </Container>
    );
}

export default Blog;
