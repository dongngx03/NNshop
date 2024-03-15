import "./BannerSmall.css"

const BannerSmall = () => {
    return (
        <div>
            <section className="banner">
                <img src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdCFWca-BUtHPuK8f9bQHaBpWycVXTbaCb3sAvX1qOvd7OBX2X2Se7akrCo2i8ktOFpZXTWKbew0cX7o1W96m~p~DjWAdttnAlr-5AL2gztDIVNYulChxiRCCAnpYg~x-En2GXzaVd3fOqP1PU2RI9jXlXhsQgYTm0eZcflbGEn6798tXoQqegMax545SYH~bXoEtXilLJzm2FSyjtR1RBCzmz6ZXg7IZY4Z8Gl363etfdj5KprZS8ybCmoUBbZ~~RIyu5KUb7di8NN4ePSI2fwmo2RU1BTdtnI75Ptr5BNy5UJEBXgW9S-iRcTmPBltKCNsIu9b8MOPVdhBew38nw__" alt="" />
                <div className="banner-opacity">
                    <span className="banner-opacity__title">Shop</span>
                    <div className="banner-opacity__link">
                        <a href="">Home</a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                        </svg>
                        <p>Shop</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerSmall