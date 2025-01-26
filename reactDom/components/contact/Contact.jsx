import React from "react";
import { Link } from "react-router";
import { Outlet, useParams } from "react-router";

const Contact = () => {
  let { userID } = useParams();
  return (
    <>
      <Link to="mobile">{userID}Mobile</Link>
      <Outlet />
      <p className="text-BorderColor-800 text-2xl font-semibold mb-4 bg-amber-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus
        dicta qui beatae distinctio est, labore vel, earum voluptatum doloremque
        laborum obcaecati minima blanditiis, itaque sequi quis. Sunt, corporis.
        Error eveniet illum deleniti pariatur inventore, eius dignissimos
        deserunt nam aut placeat distinctio at quod ratione esse natus itaque,
        eaque enim vel! Consequuntur qui amet a ipsam dolores voluptatibus
        laboriosam, facilis repudiandae fuga ducimus inventore ipsum debitis,
        nesciunt perferendis itaque perspiciatis at repellat iusto! Facere
        suscipit optio aliquam nisi alias hic debitis! Repellendus,
        necessitatibus omnis. Reprehenderit cupiditate eligendi delectus
        perferendis ullam earum praesentium nostrum sunt totam temporibus dolor
        eaque commodi voluptatum libero illum maxime officiis nobis voluptatibus
        distinctio, qui a assumenda. Tenetur neque debitis blanditiis expedita
        aspernatur distinctio ipsam suscipit omnis sint nisi harum magni natus
        nam quam itaque cumque, magnam quo mollitia iste eaque architecto dicta
        quos. Quas, expedita quisquam assumenda dolorum cum, adipisci mollitia
        iure, perferendis magni maxime ipsa. Repudiandae tempore aperiam
        perferendis asperiores rerum odio minus architecto ab expedita fugit id
        excepturi atque deserunt quod odit unde deleniti sed temporibus,
        voluptas quo. Soluta reiciendis, nemo vitae blanditiis corporis sapiente
        voluptatum sint consequuntur alias ipsum laudantium hic, eaque atque aut
        porro distinctio, sit iure. Excepturi iusto eius molestiae blanditiis.
      </p>
    </>
  );
};

export default Contact;
