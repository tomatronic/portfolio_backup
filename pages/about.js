function About() {
    
    return (
    <>
        <div className="bg-slate-100">           
            <div className="container max-w-screen-md mx-auto px-6 pt-10">
            <div className="grid grid-cols-1 gap-14 my-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
                    <div className="flex content-center justify-center flex-col order-last md:order-first w-full col-span-8">
                    <div className="text-lg md:text-xl">Hi, I'm Tom —</div>              
                    <div className="text-2xl md:text-3xl leading-8">
                        I'm a <b className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">UX Designer</b>
                        &nbsp;based in Brighton, UK. I have 10+ years of design industry experience.<br /><br />
                    </div>
                    <div className="text-lg">
                        Currently UX Designer @ <b><a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a></b>
                    </div>
                    </div>
                    <div className="col-span-4">
                        <img src="/bio.png" alt="You will often find me out hiking in the South Downs National Park" className="rounded-2xl mx-auto" />
                    </div>
                    </div>
                    <div>
                            <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                            <p>Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                            <p>I'm currently based just outside of sunny Brighton, UK. You'll usually find me hiking on the South Downs with my partner, paddle boarding at sea or adventuring around the world.</p>
                    </div>
                        <div>
                            <img src="/aboutBanner.png" alt="A little insight to my life" width="100%" />
                        </div>
                    <div>                            
                            <p className="text-center">I'm always looking for opportunities for collaboration. <a href="mailto:tom.m.spencer+portfolio@gmail.com" className="hover:text-purple-500">Reach out and let's chat!</a></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About