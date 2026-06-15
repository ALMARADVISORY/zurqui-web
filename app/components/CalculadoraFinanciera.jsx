"use client";

import { useState } from "react";

export default function CalculadoraFinanciera() {
  const [capital, setCapital] = useState(150000);
  const [interes, setInteres] = useState(3.5);
  const [plazo, setPlazo] = useState(20);
  const [mostrarCuadro, setMostrarCuadro] = useState(false);

  const principal = Number(capital) || 0;
  const meses = Math.max((Number(plazo) || 1) * 12, 1);
  const tasaMensual = (Number(interes) || 0) / 100 / 12;

  const cuota =
    tasaMensual === 0
      ? principal / meses
      : principal *
        ((tasaMensual * Math.pow(1 + tasaMensual, meses)) /
          (Math.pow(1 + tasaMensual, meses) - 1));

  const totalPagado = cuota * meses;
  const intereses = totalPagado - principal;

  const formatoEuro = (valor) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 2,
    }).format(valor || 0);

  const generarCuadro = () => {
    let saldo = principal;
    const filas = [];

    for (let mes = 1; mes <= meses; mes++) {
      const interesMes = saldo * tasaMensual;
      const amortizacion = tasaMensual === 0 ? cuota : cuota - interesMes;
      saldo = Math.max(saldo - amortizacion, 0);

      filas.push({
        mes,
        cuota,
        interes: interesMes,
        amortizacion,
        saldo,
      });
    }

    return filas;
  };

  const cuadroAmortizacion = generarCuadro();

  return (
    <div className="zurquiCalculatorWrap">
      <div className="zurquiCalculator">
        <div className="zurquiCalculatorPanel">
          <p className="tag">Simulador</p>
          <h2>Datos de financiacion</h2>
          <p className="calculatorText">
            Introduce los datos principales para obtener una estimacion de la cuota
            mensual, el total pagado y los intereses aproximados.
          </p>

          <div className="calculatorFields">
            <label>
              <span>Importe del prestamo</span>
              <input
                type="number"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
                min="0"
              />
            </label>

            <label>
              <span>Tipo de interes anual (%)</span>
              <input
                type="number"
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
                min="0"
                step="0.01"
              />
            </label>

            <label>
              <span>Plazo en anos</span>
              <input
                type="number"
                value={plazo}
                onChange={(e) => setPlazo(e.target.value)}
                min="1"
              />
            </label>
          </div>
        </div>

        <div className="zurquiResultPanel">
          <p className="tag">Resultado estimado</p>

          <div className="monthlyResult">
            <span>Cuota mensual</span>
            <strong>{formatoEuro(cuota)}</strong>
          </div>

          <div className="resultList">
            <div>
              <span>Importe solicitado</span>
              <strong>{formatoEuro(principal)}</strong>
            </div>

            <div>
              <span>Total pagado</span>
              <strong>{formatoEuro(totalPagado)}</strong>
            </div>

            <div>
              <span>Intereses estimados</span>
              <strong>{formatoEuro(intereses)}</strong>
            </div>

            <div>
              <span>Numero de cuotas</span>
              <strong>{meses}</strong>
            </div>
          </div>

          <button
            type="button"
            className="amortizationButton"
            onClick={() => setMostrarCuadro(!mostrarCuadro)}
          >
            {mostrarCuadro ? "Ocultar cuadro de amortizacion" : "Ver cuadro de amortizacion"}
          </button>

          <p className="calculatorDisclaimer">
            Esta simulacion es orientativa y no constituye una oferta financiera.
            Para un analisis personalizado, contacta con Zurqui Clouds.
          </p>
        </div>
      </div>

      {mostrarCuadro && (
        <div className="amortizationBox">
          <div className="amortizationHeader">
            <div>
              <p className="tag">Detalle mensual</p>
              <h2>Cuadro de amortizacion</h2>
            </div>
            <p>
              Desglose estimado de cada cuota, intereses, capital amortizado y
              capital pendiente.
            </p>
          </div>

          <div className="amortizationTableWrap">
            <table className="amortizationTable">
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Cuota</th>
                  <th>Interes</th>
                  <th>Amortizacion</th>
                  <th>Pendiente</th>
                </tr>
              </thead>

              <tbody>
                {cuadroAmortizacion.map((fila) => (
                  <tr key={fila.mes}>
                    <td>{fila.mes}</td>
                    <td>{formatoEuro(fila.cuota)}</td>
                    <td>{formatoEuro(fila.interes)}</td>
                    <td>{formatoEuro(fila.amortizacion)}</td>
                    <td>{formatoEuro(fila.saldo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
