import React, { useState, useEffect } from "react";
import Select from "react-select";

export const TestUser = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.content);
        const users = data.content.map(
          ({ testUserDni, testUserId, testUserName }) => {
            return {
              value: testUserId,
              label: `${testUserDni} ${testUserName}`,
            };
          }
        );
        setOptions(users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className="posts-container">
      <div className="post-card">
        <h2 className="post-title">Multiselect con React-select</h2>
        <h4>Mysql - Django - React</h4>
      </div>
      <div>
        <Select
          placeholder="Buscar CIIU"
          noOptionsMessage={() => "Registro no encontrado"}
          isMulti
          name="colors"
          onChange={setSelectedOption}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <hr />
      <h4>Registros seleccionados</h4>
      <ul>
        {selectedOption.map(({ value, label }) => (
          <li key={value}>
            {value} - {label}
          </li>
        ))}
      </ul>
      <hr/>
      <p>La forma más fácil de usar <a href="https://react-select.com/home" target="_blank" rel="noreferrer">react-select</a> es instalarlo desde npm e integrarlo en su aplicación con Webpack.</p>
      <code>npm i --save react-select</code>
    </div>
  );
};
