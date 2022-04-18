import React, { useState } from "react";
import { Magnifier } from "./Icons";
import "./SmallComps.css";
import { Inertia } from '@inertiajs/inertia'
import {usePage} from "@inertiajs/inertia-react";

const SearchInput = ({ color }) => {
    const sharedData = usePage().props.localizations;
    const [values, setValues] = useState({
        term: "",
    })
    function handleSubmit(e) {
        e.preventDefault()
        Inertia.get(route("client.search.index"), values)
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="wrapper" style={{ height: "0" }}>
      <div className={openSearch ? "search_input open" : "search_input"}>
          <form onSubmit={handleSubmit}>
              <input
                  onChange={(e) => {
                      setOpenSearch(true);
                    handleChange(e)
                  }}
                  style={{ border: `${color} 2px solid` }}
                  type="text"
                  placeholder={__('client.search_placeholder',sharedData)}
                  name="term"
                  id="term"
              />
              <Magnifier color={color} />
          </form>


      </div>
    </div>
  );
};

export default SearchInput;
