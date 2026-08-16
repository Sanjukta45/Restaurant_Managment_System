import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css";

export default function About() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <main className="about-page">

                {/* Hero Section */}
                <section className="about-hero">

                    <div className="about-hero-content">
                        <span className="about-label">
                            WELCOME TO RESTOFLOW
                        </span>

                        <h1>
                            Good food.
                            <br />
                            Good mood.
                        </h1>

                        <p>
                            We make it simple to discover delicious food,
                            order your favorites, and enjoy every bite.
                        </p>

                        <button
                            onClick={() => navigate("/menu")}
                            className="about-menu-btn"
                        >
                            Explore Our Menu
                        </button>
                    </div>

                    <div className="about-hero-image">
                        <img
                            src="/food_image/cappuccino.jpg"
                            alt="Delicious food"
                        />
                    </div>

                </section>


                {/* Our Story */}
                <section className="about-story">

                    <div className="story-image">
                        <img
                            src="/food_image/cappuccino.jpg"
                            alt="Our restaurant"
                        />
                    </div>

                    <div className="story-content">

                        <span className="section-label">
                            OUR STORY
                        </span>

                        <h2>
                            Food made with passion
                        </h2>

                        <p>
                            RestoFlow was created with one simple idea:
                            ordering great food should be easy, fast,
                            and enjoyable.
                        </p>

                        <p>
                            From your favorite coffee to delicious meals,
                            we bring everything together in one simple
                            experience.
                        </p>

                        <p>
                            We focus on quality food, simple ordering,
                            and creating an experience that keeps you
                            coming back.
                        </p>

                    </div>

                </section>


                {/* Why Choose Us */}
                <section className="why-section">

                    <div className="section-heading">
                        <span className="section-label">
                            WHY RESTOFLOW
                        </span>

                        <h2>
                            Why choose us?
                        </h2>

                        <p>
                            Everything you need for a simple and
                            enjoyable food ordering experience.
                        </p>
                    </div>


                    <div className="features">

                        <div className="feature-card">
                            <div className="feature-icon">🍴</div>

                            <h3>Fresh Food</h3>

                            <p>
                                Carefully selected ingredients and
                                delicious meals made for you.
                            </p>
                        </div>


                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>

                            <h3>Fast Service</h3>

                            <p>
                                Quick ordering experience so you can
                                spend less time waiting.
                            </p>
                        </div>


                        <div className="feature-card">
                            <div className="feature-icon">❤️</div>

                            <h3>Quality First</h3>

                            <p>
                                We care about every detail from the
                                first click to your last bite.
                            </p>
                        </div>

                    </div>

                </section>


                {/* Mission */}
                <section className="mission-section">

                    <div className="mission-content">

                        <span className="section-label">
                            OUR MISSION
                        </span>

                        <h2>
                            Making every meal a little more special.
                        </h2>

                        <p>
                            Whether you're starting your morning with
                            coffee or ordering dinner after a long day,
                            RestoFlow is here to make the experience
                            simple and enjoyable.
                        </p>

                    </div>

                </section>


                {/* CTA */}
                <section className="about-cta">

                    <h2>
                        Hungry already?
                    </h2>

                    <p>
                        Explore our menu and find something you'll love.
                    </p>

                    <button
                        onClick={() => navigate("/menu")}
                    >
                        Order Now
                    </button>

                </section>

            </main>

            <Footer />
        </>
    );
}