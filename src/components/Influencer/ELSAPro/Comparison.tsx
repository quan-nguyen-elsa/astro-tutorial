import React from 'react'
import './Comparison.css'

interface Props {
  section: Record<string, any>;
}

interface ComparisonProp {
  title: string;
  is_free: string;
  is_true: string;
}

const Comparison: React.FC<Props> = ({ section }) => {
  const { section_title, comparison_list } = section
  const TickIcon = <img src="https://d1t11jpd823i7r.cloudfront.net/dlp/yes.svg" alt="" />
  const CloseIcon = <img src="https://d1t11jpd823i7r.cloudfront.net/dlp/no2.svg" alt="" />

  return (
    <section className="section-comparison">
      <div className="container">
        <h2 className="section-title">{section_title.title}</h2>
        { comparison_list.length && (
          <div className="comparison-container">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <td>ELSA <span className="free">Free</span></td>
                  <td>ELSA <span className="pro">Pro</span></td>
                </tr>
              </thead>
              <tbody>
                {comparison_list.map((item: ComparisonProp) => (
                  <tr>
                    <th>{item.title}</th>
                    <td>{item.is_free === 'o' ? TickIcon : (item.is_free === 'x' ? CloseIcon : item.is_free)}</td>
                    <td>{item.is_true === 'o' ? TickIcon : (item.is_true === 'x' ? CloseIcon : item.is_true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Comparison
