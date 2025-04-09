import { Link } from 'react-router-dom';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Dance Your Way to Excellence</h1>
          <p>Join GrooveSphere's vibrant community of dancers and discover your rhythm</p>
          <Link to="/signup" className="btn btn-primary">
            Start Dancing Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Classes */}
      <section className={styles.featured}>
        <div className="container">
          <h2>Featured Dance Classes</h2>
          <div className={styles.grid}>
            {[
              {
                title: 'Hip-Hop Fundamentals',
                image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=800&q=80',
                instructor: 'Mike Rodriguez',
                level: 'Beginner'
              },
              {
                title: 'Contemporary Dance',
                image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80',
                instructor: 'Sarah Chen',
                level: 'Intermediate'
              },
              {
                title: 'Ballet Excellence',
                image: 'data:image/jpeg;base64,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',
                instructor: 'Carlos Rivera',
                level: 'Advanced'
              }
              
              
              
              
            ].map((classItem, index) => (
              <div key={index} className={styles.classCard}>
                <img src={classItem.image} alt={classItem.title} />
                <div className={styles.cardContent}>
                  <h3>{classItem.title}</h3>
                  <p>Instructor: {classItem.instructor}</p>
                  <span className={styles.level}>{classItem.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.features}>
        <div className="container">
          <h2>Why Choose GrooveSphere?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <Calendar size={40} />
              <h3>Flexible Schedule</h3>
              <p>Choose from multiple class times that fit your busy lifestyle</p>
            </div>
            <div className={styles.feature}>
              <Users size={40} />
              <h3>Expert Instructors</h3>
              <p>Learn from professional dancers with years of experience</p>
            </div>
            <div className={styles.feature}>
              <Star size={40} />
              <h3>All Skill Levels</h3>
              <p>From beginners to advanced dancers, we have classes for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className={styles.testimonialGrid}>
            {[
              {
                name: 'Jessica Thompson',
                text: 'GrooveSphere has transformed my dancing journey. The instructors are amazing and the community is so supportive!',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
              },
              {
                name: 'David Chen',
                text: 'I started as a complete beginner, and now I\'m confidently performing in showcases. The progress I\'ve made is incredible.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
              }
            ].map((testimonial, index) => (
              <div key={index} className={styles.testimonial}>
                <img src={testimonial.image} alt={testimonial.name} />
                <p>{testimonial.text}</p>
                <h4>{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Start Your Dance Journey?</h2>
          <p>Join our community of passionate dancers today!</p>
          <div className={styles.ctaButtons}>
            <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
            <Link to="/classes" className="btn btn-secondary">Browse Classes</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;