import React from "react";
import Container from "../../components/Container/Container";
import { Link, useParams } from "react-router-dom";
import pic from "../../assets/newspapers-4565916_1280.jpg"

function Product(){
    const params = useParams()
    
    return(
        <Container>
            <div className="">
                <div className="shadow-md bg-gray-100 shadow-gray-300 p-3 mr-5 md:w-[25%] rounded md:float-left md:mb-0 mb-5">
                    <h2 className="font-bold text-lg">
                        دلستر جوجو
                    </h2>
                    <img src={pic} className="rounded my-2" alt=""/>
                    <p className="text-sm">
                        2,000,000 تومان
                    </p>
                    <Link>
                        <button className="cursor-pointer text-sm border-2 border-transparent anim hover:scale-103 bg-green-400 mt-3 py-2 rounded text-white font-bold w-[100%]">
                            اضافه کردن
                        </button>
                    </Link>
                </div>
                <p>
                    lorem*50
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia magni, nihil, eligendi quas vel dolores at provident blanditiis rem quos, maiores nemo eos sequi veritatis. Eligendi maxime inventore enim!
                   Odio, perferendis illo dolor cum dolorem eaque quod culpa tempore perspiciatis sed. Fuga vero soluta tempore tempora fugiat consequatur id praesentium consectetur corporis eius nesciunt officia, magni sequi magnam eveniet.
                   Delectus blanditiis quis soluta beatae sint sed esse velit, nam dolore vero veritatis doloremque officia, autem, ducimus quod ratione. Vero voluptas aut iure totam tenetur asperiores voluptatibus sint minima atque!
                   Culpa molestias omnis vel necessitatibus a cupiditate tempora at, possimus dolorum nemo consectetur! Perferendis magni dignissimos rem perspiciatis accusantium neque eligendi reiciendis, ab iusto molestiae libero, quo, minima deleniti nisi.
                   Dolorum quis rem reiciendis adipisci iste, ut expedita cum distinctio molestiae tenetur magni! Voluptate incidunt reiciendis, dolor fugit ex vitae possimus deserunt excepturi magni suscipit amet pariatur vel, at praesentium.
                   Repudiandae eveniet voluptatibus quaerat voluptas atque. Cumque, molestiae nihil? Voluptate optio minima voluptas dignissimos asperiores obcaecati, debitis, impedit reprehenderit itaque consequuntur nihil tempora ex nemo animi dicta illo totam omnis.
                </p>
            </div>    
        </Container>
    )
}

export default Product;