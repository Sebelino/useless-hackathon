import React from 'react';
import './Machine.css';

interface MachineProps {
  isSpinning: boolean;
}

const Machine: React.FC<MachineProps> = ({ isSpinning }) => {
  return (
    <div>
      <div id="all">
        <div className="top"></div>
        <div className="bod">
          <div className="upper">
            <div className="u1"></div>
            <div className="u2"></div>
            <div className="u3"></div>
            <div className="u4">
              <table>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>

            <div className="u5"></div>
          </div>

          <div className={`circle_out ${isSpinning ? 'spinning' : ''}`}></div>
          <div className="circle_inn"></div>

          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
