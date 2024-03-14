import React from "react";
import {FacebookFilled, InstagramOutlined, TwitterOutlined, GoogleOutlined} from '@ant-design/icons';

function Footer(){
    
    return(
        <div className="bg-red-500 h-50 lg:h-78  py-6">
            <div className="w-50 flex justify-center space-x-4 text-white px-5 text-2xl lg:text-3xl">
                <FacebookFilled />
                <InstagramOutlined />
                <TwitterOutlined />
                <GoogleOutlined />
            </div>
            <div className="flex justify-center mt-2">
                <p className="text-white text-md lg:text-lg"> &copy; Prabesh Karki  2023</p>
            </div>
        </div>
    )
}
export default Footer;