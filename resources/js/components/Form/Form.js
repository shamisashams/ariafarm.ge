import React, { useState } from "react";
import { MainButton } from "../Buttons/Buttons";
import "./Form.css";
import { usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

export const Form = () => {
    const sharedData = usePage().props.localizations;
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleClick(e) {
        console.log(values);
        e.preventDefault();
        Inertia.post(route("client.contact.mail"), values);
    }

    const inputs = [
        {
            type: "text",
            placeholder: __("client.form_name", sharedData),
            id: "first_name",
        },
        {
            type: "text",
            placeholder: __("client.form_surname", sharedData),
            id: "last_name",
        },
        {
            type: "email",
            placeholder: __("client.form_email", sharedData),
            id: "email",
        },
        {
            type: "tel",
            placeholder: __("client.form_phone", sharedData),
            id: "phone",
        },
    ];
    return (
        <div className="form" data-aos="fade-up">
            <div className="title35 ">
                {__("client.form_header", sharedData)}
            </div>
            {inputs.map((item, index) => {
                return (
                    <input
                        key={index}
                        type={item.type}
                        id={item.id}
                        placeholder={item.placeholder}
                        onChange={handleChange}
                    />
                );
            })}
            <textarea
                id={"message"}
                placeholder={__("client.form_message", sharedData)}
                onChange={handleChange}
            ></textarea>
            <MainButton
                text={__("client.form_send_btn", sharedData)}
                onClick={handleClick}
            />
        </div>
    );
};
