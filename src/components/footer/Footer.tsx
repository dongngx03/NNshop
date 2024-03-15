import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-heading">
                    <div className="footer-heading-item">
                        <div className="footer-heading__logo">
                            <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.3547 3.51562C45.0744 3.51562 43.8741 3.86121 42.839 4.46156V1.75781C42.839 0.787031 42.052 0 41.0812 0H12.9562C11.9853 0 11.1983 0.787031 11.1983 1.75781V4.48301C10.155 3.8693 8.94102 3.51562 7.64551 3.51562C3.76848 3.51562 0.614258 6.66984 0.614258 10.5469C0.614258 13.5041 1.49059 16.3615 3.14844 18.8102C5.97078 22.9789 9.45113 24.0607 12.331 25.2127C13.9916 29.348 17.3496 32.6252 21.5384 34.1769L20.2422 42.4219H19.9875C17.0797 42.4219 14.714 44.7875 14.714 47.6953V56.4844H12.9562C11.9854 56.4844 11.1984 57.2714 11.1984 58.2422C11.1984 59.213 11.9854 60 12.9562 60H41.0812C42.052 60 42.839 59.213 42.839 58.2422C42.839 57.2714 42.052 56.4844 41.0812 56.4844H39.3234V47.6953C39.3234 44.7875 36.9577 42.4219 34.05 42.4219H33.7952L32.4991 34.177C36.6941 32.623 40.0558 29.3386 41.7139 25.1948C44.4344 24.1066 48.0005 23.0217 50.8518 18.8102C52.5097 16.3615 53.386 13.504 53.386 10.5469C53.3859 6.66984 50.2317 3.51562 46.3547 3.51562ZM11.1853 20.968C6.89926 19.2536 4.12988 15.1631 4.12988 10.5469C4.12988 8.60836 5.70699 7.03125 7.64551 7.03125C9.58402 7.03125 11.1611 8.60836 11.1611 10.5469C11.1611 10.6705 11.1741 10.791 11.1984 10.9073V19.3359C11.1984 19.9009 11.2288 20.4588 11.2869 21.0087L11.1853 20.968ZM35.8078 56.4844H18.2296V52.9688H35.8078V56.4844ZM34.05 45.9375C35.0192 45.9375 35.8078 46.7261 35.8078 47.6953V49.4531H18.2296V47.6953C18.2296 46.7261 19.0182 45.9375 19.9875 45.9375C20.9411 45.9375 31.8134 45.9375 34.05 45.9375ZM23.801 42.4219L24.9642 35.023C25.6368 35.1107 26.3225 35.1562 27.0187 35.1562C27.7149 35.1562 28.4006 35.1105 29.0732 35.023L30.2364 42.4219H23.801ZM39.3234 19.3359C39.3234 26.1207 33.8035 31.6406 27.0187 31.6406C20.2339 31.6406 14.714 26.1207 14.714 19.3359V10.5469H39.3234V19.3359ZM39.3234 7.03125H14.714V3.51562H39.3234V7.03125ZM42.8148 20.968L42.7523 20.993C42.8093 20.4483 42.8389 19.8955 42.8389 19.3359V10.5469C42.839 8.60836 44.4161 7.03125 46.3547 7.03125C48.2932 7.03125 49.8703 8.60836 49.8703 10.5469C49.8703 15.1631 47.1009 19.2537 42.8148 20.968Z" fill="#242424" />
                            </svg>
                        </div>
                        <div className="footer-heading__infor">
                            <span>High Quality</span>
                            <p>crafted from top materials</p>
                        </div>
                    </div>
                    <div className="footer-heading-item">
                        <div className="footer-heading__logo">
                            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_810)">
                                    <path d="M57.1193 21.2611C56.3275 18.8096 56.6651 15.1295 54.6072 12.2881C52.5333 9.42425 48.9261 8.61027 46.8893 7.12058C44.8739 5.6466 42.9989 2.43906 39.6088 1.33281C36.3143 0.25773 32.9454 1.7166 30.3333 1.7166C27.7215 1.7166 24.3528 0.257378 21.0577 1.33269C17.6682 2.43871 15.7917 5.64695 13.7776 7.12023C11.743 8.60816 8.13313 9.42437 6.0595 12.2877C4.00345 15.1268 4.33755 18.8153 3.54724 21.261C2.79513 23.5887 0.333252 26.3823 0.333252 30.0002C0.333252 33.6202 2.79231 36.403 3.54724 38.7392C4.33895 41.1907 4.00146 44.8708 6.05927 47.7122C8.13313 50.5762 11.7402 51.39 13.7772 52.8798C15.7923 54.3536 17.6676 57.5614 21.0577 58.6675C24.35 59.7419 27.7242 58.2837 30.3333 58.2837C32.9387 58.2837 36.3207 59.7403 39.6088 58.6676C42.9984 57.5616 44.8738 54.3541 46.8889 52.8801C48.9235 51.3921 52.5334 50.5759 54.607 47.7126C56.6632 44.8734 56.3288 41.1852 57.1193 38.7393C57.8714 36.4115 60.3333 33.6178 60.3333 30.0002C60.3333 26.3803 57.8748 23.5983 57.1193 21.2611ZM52.659 37.2979C51.7361 40.1543 51.9779 43.3511 50.8107 44.9629C49.6278 46.5961 46.5201 47.3421 44.1221 49.0962C41.7504 50.8307 40.0881 53.5803 38.1547 54.2111C36.3256 54.808 33.3449 53.596 30.3334 53.596C27.2999 53.596 24.3498 54.8106 22.5119 54.2111C20.5788 53.5803 18.9188 50.8326 16.5445 49.0961C14.1607 47.3527 11.0353 46.5913 9.85579 44.9627C8.69235 43.3562 8.92497 40.1373 8.00774 37.298C7.10868 34.5161 5.02075 32.1073 5.02075 30.0002C5.02075 27.8909 7.10681 25.4904 8.00751 22.7024C8.93036 19.8461 8.6886 16.6491 9.85579 15.0374C11.038 13.4052 14.148 12.6568 16.5445 10.9041C18.9238 9.16398 20.5756 6.42097 22.5117 5.78921C24.3392 5.19296 27.3297 6.40433 30.3331 6.40433C33.3722 6.40433 36.3149 5.18886 38.1546 5.78921C40.0875 6.41992 41.7488 9.16867 44.1221 10.9042C46.5056 12.6476 49.6312 13.409 50.8107 15.0375C51.9744 16.6443 51.7405 19.8599 52.6588 22.7022V22.7023C53.5578 25.4842 55.6458 27.893 55.6458 30.0002C55.6458 32.1094 53.5597 34.5099 52.659 37.2979ZM41.1313 22.4773C42.0466 23.3927 42.0466 24.8766 41.1313 25.7918L29.4001 37.523C28.4847 38.4384 27.0007 38.4382 26.0854 37.523L19.5354 30.9729C18.62 30.0576 18.6199 28.5736 19.5352 27.6584C20.4506 26.7432 21.9348 26.743 22.8498 27.6584L27.7427 32.5512L37.8165 22.4774C38.7318 21.5621 40.2159 21.5621 41.1313 22.4773Z" fill="#242424" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_810">
                                        <rect width="60" height="60" fill="white" transform="translate(0.333252)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="footer-heading__infor">
                            <span>Warranty Protection</span>
                            <p>Over 2 years</p>
                        </div>
                    </div>
                    <div className="footer-heading-item">
                        <div className="footer-heading__logo">
                            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_818)">
                                    <path d="M56.0147 31.102V3.77976C56.0147 2.80502 55.2244 2.01477 54.2497 2.01477H6.96186C5.98711 2.01477 5.19687 2.80502 5.19687 3.77976V33.2801C4.34544 33.4042 3.51307 33.7347 2.77671 34.2814C0.4554 35.9274 -0.0936297 39.6111 1.8508 41.8828L9.80067 51.5205C14.7217 57.2799 19.9492 57.9855 27.7206 57.9855C34.3896 57.9855 37.3711 58.015 43.1832 56.6906L48.8427 55.337C49.7604 56.6185 51.2172 57.4486 52.855 57.4486H55.643C58.4131 57.4486 60.6667 55.0745 60.6667 52.1562V36.3785C60.6668 33.5921 58.6117 31.3032 56.0147 31.102ZM48.0814 34.7327L45.7297 33.5383C41.8631 31.5866 37.3926 31.5143 33.4649 33.3404C32.3934 33.7619 30.0562 35.176 28.8438 35.1287H20.6835C17.9767 35.1287 15.7745 37.3308 15.7745 40.0377V41.3249C15.7593 41.3089 15.7434 41.2937 15.7284 41.2774L9.90104 34.9521C9.54839 34.5693 9.15221 34.249 8.72696 33.992V16.4811H23.1708V22.9511C23.1708 23.9258 23.9611 24.7161 24.9358 24.7161H36.073C37.0478 24.7161 37.838 23.9258 37.838 22.9511V16.4811H52.4848V31.1019C50.4226 31.2612 48.703 32.7365 48.0814 34.7327ZM26.7007 16.4811H34.3079V21.1861H26.7007V16.4811ZM52.4847 12.9511H37.838V5.54475H52.4848V12.9511H52.4847ZM34.308 5.54475V12.9512H26.7008V5.54475H34.308ZM23.1707 5.54475V12.9512H8.72685V5.54475H23.1707ZM42.364 53.2569C36.9949 54.4866 33.7613 54.4368 27.7839 54.4368C20.4886 54.4368 16.9637 54.3189 12.5239 49.2741L4.57406 39.6365C3.19125 37.8358 5.69589 35.7102 7.30485 37.3436L13.1323 43.6691C14.6724 45.2942 16.6105 46.1886 18.9992 46.2412H35.1557C36.1304 46.2412 36.9207 45.4509 36.9207 44.4762C36.9207 43.5014 36.1304 42.7112 35.1557 42.7112H19.3043V40.0375C19.3043 39.2771 19.9229 38.6584 20.6834 38.6584H28.8437C30.6821 38.7901 33.3356 37.255 34.9531 36.5411C37.8947 35.1734 41.243 35.2275 44.1351 36.6873L47.8315 38.5648V51.949L42.364 53.2569ZM57.1369 52.1561C57.1369 53.1279 56.4668 53.9185 55.6431 53.9185H52.8551C52.0315 53.9185 51.3615 53.1279 51.3615 52.1561V36.3785C51.3615 35.4067 52.0316 34.616 52.8551 34.616H55.6431C56.4668 34.616 57.1369 35.4066 57.1369 36.3785V52.1561Z" fill="#242424" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_818">
                                        <rect width="60" height="60" fill="white" transform="translate(0.666748)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="footer-heading__infor">
                            <span>Free Shipping</span>
                            <p>Order over 150 $</p>
                        </div>
                    </div>
                    <div className="footer-heading-item">
                        <div className="footer-heading__logo">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_824)">
                                    <path d="M54.6935 23.9628C54.2992 10.6825 43.3741 0 29.9999 0C16.6257 0 5.70059 10.6825 5.30612 23.9628L3.5293 25.7396V37.7898L5.294 39.5545V47.7647C5.294 52.5652 9.19941 56.4706 13.9999 56.4706H16.1858C16.9142 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7986 56.4681 29.8997 56.4706 29.9999 56.4706C38.522 56.4706 45.6526 50.3981 47.2921 42.3529H51.9073L56.4705 37.7898V25.7396L54.6935 23.9628ZM29.9999 3.52941C40.4741 3.52941 49.1953 11.174 50.8806 21.1765H47.2921C45.6526 13.1313 38.522 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11918C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6708 21.1765C37.9662 21.1594 33.9368 21.5068 30.6147 16.6506L29.0015 14.2926L27.6152 16.7907C25.5952 20.4306 22.8748 21.1765 19.4117 21.1765H16.3289C17.9001 15.0944 23.4337 10.5882 29.9999 10.5882C36.5661 10.5882 42.0997 15.0944 43.6708 21.1765ZM12.3528 38.8235H9.55436L7.05871 36.3279V27.2015L9.55436 24.7059H12.3528V38.8235ZM8.82341 47.7647V42.3529H12.7042C13.3686 45.6441 14.9581 48.6652 17.3129 51.0916C16.8193 51.6191 16.4321 52.2467 16.1858 52.9412H13.9999C11.1455 52.9412 8.82341 50.6191 8.82341 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6788 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6788 56.4706 24.7058 56.4706ZM44.1175 38.8235C44.1175 46.608 37.7844 52.9412 29.9999 52.9412C29.8987 52.9412 29.7967 52.9392 29.6948 52.9368C28.9652 50.8851 27.0047 49.4118 24.7058 49.4118C21.0822 49.4198 21.14 49.3936 20.6884 49.4352C17.6246 46.7498 15.8822 42.9248 15.8822 38.8235V24.7059H19.4117C22.5348 24.7059 26.3384 24.1909 29.2826 20.6076C33.1673 24.6786 37.9146 24.7059 42.1761 24.7059H44.1175V38.8235ZM52.9411 36.3279L50.4454 38.8235H47.6469V24.7059H50.4454L52.9411 27.2015V36.3279Z" fill="#242424" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_824">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="footer-heading__infor">
                            <span>24 / 7 Support</span>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>

                <div className="footer-body">
                    <div className="container">
                        <div className="body-top">
                            <div className="body-top-item1">
                                <span>
                                    Funiro.
                                </span>
                                <p>
                                    400 University Drive Suite 200 Coral Gables,
                                    FL 33134 USA
                                </p>
                            </div>
                            <div className="body-top-item2">
                                <span>Link</span>
                                <ul className="item2__nav">
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Shop</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="body-top-item2">
                            <span>Help</span>
                                <ul className="item2__nav">
                                    <li>
                                        <a href="">Payment Options</a>
                                    </li>
                                    <li>
                                        <a href="">Returns</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policies</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="body-top-item3">
                                <span className="item3__nav">Newsletter</span>
                                <div className="item3__email">
                                    <input type="text" placeholder="Enter Your Email Address"/>
                                    <button>SUBSRICIBE</button>
                                </div>
                            </div>
                        </div>

                        <div className="body-bottom">
                            <span>2023 furino. All rights reverved</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer