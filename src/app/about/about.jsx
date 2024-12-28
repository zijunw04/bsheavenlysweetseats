export default function About() {
    return (
        <div className="bg-background w-screen h-screen flex items-center justify-center p-4">
            {/* Logo Section */}
            <div className="absolute top-48 text-blue-600  left-80 p-4 size-11 text-8xl font-indie text-" > 
            <p> About </p>
            </div> 
            <div className="flex flex-col items-center">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="max-w-full h-auto mb-6"
                />
                
                {/* About Section */}
                <div className="bg-white max-w-[1050px] p-4 shadow-lg  text- to-blue-500 rounded-md">
                    <h1 className="text-2xl font-bold mb-4 text-center text-yellow-500">
                        About B’s Heavenly Sweets &amp; Eats
                    </h1>
                    <p className="text-lg text-blue-400 mb-4">
                        My name is Barbara Montgomery, and I am the proud owner of 
                        <strong> B’s Heavenly Sweets &amp; Eats</strong>! Baking and cooking have been a passion of 
                        mine from an early age, inspired by watching and helping my grandma in the kitchen. 
                        I pursued my love for cooking by taking Home Economics from 7th to 12th grade to 
                        deepen my skills. My mother adored my baking, so while she cooked Sunday dinner, 
                        I would always make dessert.
                    </p>
                    <p className="text-lg  text-blue-400 mb-4">
                        I started my baking business by creating and selling hand-made, 
                        chocolate-covered strawberries. Experimenting with recipes was my joy—I would 
                        write out recipes from cookbooks, try them at home, and perfect my creations. 
                        Soon, people began requesting cakes and other baked goods. They paid me for 
                        these treats, and my business flourished beyond just strawberries!
                    </p>
                    <p className="text-lg text-blue-400 mb-4">
                        Originally, my business was named <strong>B’s Heavenly Sweets</strong>. However, as 
                        demand for my cooking services grew, I expanded into savory dishes and added 
                        “Eats” to the name. Today, I offer not only delectable desserts for all occasions 
                        but also hearty, delicious meals for individuals and events. It brings me great joy 
                        to share my passion for cooking and baking with others!
                    </p>
                </div>
            </div>
        </div>
    );
}
