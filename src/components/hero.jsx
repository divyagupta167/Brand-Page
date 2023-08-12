

const HeroSection = () => {
  return (
    <main className="hero container">
    <div className="hero_content">
        <h1>YOU DESERVE DELICIOUS ICE-CREAMS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore. </p>
        <div className="hero_btn">
            <button>Order Now</button>
            <button className="secondary-btn">Category</button>

        </div>
        <div className="shopping">
            <p>Now Available On</p>
            <div className="brand_icon">
                <img src="/Images/Swiggy.png" alt="Swiggy" height={35} />
                <img src="/Images/Zomato.png" alt="Zomato" height={35} />
            </div>
        </div>
    </div>
    <div className="hero_image">
    <img src="/Images/Icecream.avif" alt="Zomato" height={600} />
    </div>

    </main>
  )
}

export default HeroSection