import React from 'react';
import styles from "./Hobbies.module.css";

export default function Hobbies({ cours }) {
  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.headerData}>Image</th>
          <th className={styles.headerData}>Cours</th>
          <th className={styles.headerData}>Status</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {cours.map(function (element, index) {
          return (
            <tr
              key={index}
              className={styles.tableLine}
              style={{
                backgroundColor:
                  index % 2 === 0 ? "rgb(65, 65 ,70)" : "rgb(55, 55 ,60)",
              }}
            >
              <td>
                <img
                  className={styles.icon}
                  src={element.icon}
                  alt={element.nom}
                />
              </td>
              <td>
                <p className={styles.textData}>{element.nom}</p>
              </td>
              <td>
                <p style={{ color: element.isDone ? "green" : "red" }}>
                  {element.isDone ? "Terminé" : "Non terminé"}
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}