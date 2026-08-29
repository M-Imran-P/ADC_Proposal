import React, { useState } from 'react';
import { PrintToolbar } from './components/PrintToolbar';

export default function App() {
  const [inkSaver, setInkSaver] = useState<boolean>(false);
  const [compactMode, setCompactMode] = useState<boolean>(false);

  return (
    <div className={`app-container min-h-screen ${inkSaver ? 'ink-saver' : ''} ${compactMode ? 'compact-density' : ''}`}>
      {/* Sticky Print & Export Toolbar (hidden during print) */}
      <PrintToolbar
        inkSaver={inkSaver}
        setInkSaver={setInkSaver}
        compactMode={compactMode}
        setCompactMode={setCompactMode}
      />

      {/* PAGE 1: COVER / OVERVIEW & SECTION 1 */}
      <div id="sec-cover" className="cov page-block page-1">
        <div className="cov-header">
          <div className="cov-header-inner">
            <div className="cov-logo">Acme <span>Designs &amp; Constructions</span></div>
            <div className="cov-sub">
              No. 327, 1st Cross, Balaji Krupa Layout, Dr. Shivram Karanth Nagar, R.K. Hegdenagar, Bangalore-560077 &nbsp;|&nbsp; www.adc.builders &nbsp;|&nbsp; 99000 80055 &nbsp;|&nbsp; acmedesigns1@gmail.com
            </div>
          </div>
        </div>

        <div className="cov-content">
          <div className="cov-title">2026 Proposal Matrix — Residential Turnkey Construction</div>
          <div className="cov-date">
            All rates in ₹/sq.ft of built-up area · Measured roof outer edge to outer edge at all floors including parking, balconies, staircase, ducts &amp; utility · 18% GST applicable additionally
          </div>

          <div className="cov-tiers">
            <div className="tp">
              <div className="nm">ADC Standard</div>
              <div className="rt">₹1,900<small> /sq.ft</small></div>
              <div className="ln">Budget-conscious, essential features</div>
              <div className="tag">ESSENTIAL</div>
            </div>
            <div className="tp">
              <div className="nm">ADC Superior</div>
              <div className="rt">₹2,200<small> /sq.ft</small></div>
              <div className="ln">Enhanced finishes &amp; materials</div>
              <div className="tag">ENHANCED</div>
            </div>
            <div className="tp">
              <div className="nm">ADC Premium</div>
              <div className="rt">₹2,500<small> /sq.ft</small></div>
              <div className="ln">Designer elements &amp; premium brands</div>
              <div className="tag">PREMIUM</div>
            </div>
            <div className="tp">
              <div className="nm">ADC Executive</div>
              <div className="rt">₹2,800<small> /sq.ft</small></div>
              <div className="ln">Higher grade finishes &amp; exclusive brands</div>
              <div className="tag">SIGNATURE</div>
            </div>
          </div>

          {/* OVERVIEW ASSURANCE BOX */}
          <div className="cov-overview-box">
            <div className="cov-overview-title">Turnkey Construction Scope Overview &amp; Assurance</div>
            <div className="cov-overview-grid">
              <div className="cov-overview-item">Architectural, structural, MEP drawings &amp; 3D elevations coordinated end-to-end.</div>
              <div className="cov-overview-item">Quality tested construction materials: Fe500/Fe550 TMT, OPC/PPC 43/53 grade cement, M-Sand &amp; high-spec concrete.</div>
              <div className="cov-overview-item">Dedicated on-site site engineer supervision, stage-wise QA checklist, and strict quality control protocol.</div>
              <div className="cov-overview-item">Comprehensive 10-Year Structural Warranty &amp; 5-Year Waterproofing Warranty backed with stamp paper agreement.</div>
              <div className="cov-overview-item">Completely transparent variation policy: Zero surprise costs. All changes priced and client-approved upfront.</div>
              <div className="cov-overview-item">Complete turnkey execution covering excavation, RCC structure, block masonry, plastering, plumbing, electrical, tiles &amp; painting.</div>
            </div>
          </div>

          {/* ===== SECTION 1: DESIGN & DRAWINGS (ON PAGE 1) ===== */}
          <div id="sec-1" className="sh sh-a" style={{ marginTop: '10px' }}>1. Design, Drawings &amp; Pre-Construction Services</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD<span className="rt2">₹1,900<small>/sqft</small></span></th>
                <th className="th3">ADC SUPERIOR<span className="rt2">₹2,200<small>/sqft</small></span></th>
                <th className="th2">ADC PREMIUM<span className="rt2">₹2,500<small>/sqft</small></span></th>
                <th className="th1">ADC EXECUTIVE<span className="rt2">₹2,800<small>/sqft</small></span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Architectural drawing</td>
                <td>2D Floor plan included</td>
                <td>2D Floor plan included</td>
                <td>Detailed 2D Floor plans</td>
                <td>Detailed 2D Floor plans</td>
              </tr>
              <tr>
                <td>3D Elevation</td>
                <td>3D Elevation design included</td>
                <td>3D Elevation design included</td>
                <td>3D contemporary Elevation</td>
                <td>3D contemporary Elevation</td>
              </tr>
              <tr>
                <td>Structural Design</td>
                <td>As per structural design</td>
                <td>As per structural design</td>
                <td>Detailed structural design</td>
                <td>Detailed structural design</td>
              </tr>
              <tr>
                <td>MEP Drawing</td>
                <td>MEP as per package standards</td>
                <td>MEP as per package standards</td>
                <td>Detailed MEP drawing floor wise</td>
                <td>Detailed MEP drawing floor wise</td>
              </tr>
              <tr>
                <td>GFC Drawings</td>
                <td>Good-for-Construction drawings in PDF format</td>
                <td>Good-for-Construction drawings in PDF format</td>
                <td>Detailed GFC drawing set — PDF format</td>
                <td>Detailed GFC drawing set — PDF &amp; CAD format</td>
              </tr>
              <tr>
                <td>Soil Test</td>
                <td colSpan={4}>Client scope.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="sw">
        {/* ===== PAGE 2: SECTIONS 2 & 3 ===== */}
        <div className="page-block page-2">
          {/* ===== SECTION 2: FOUNDATION, SETTING OUT & CONSTRUCTION METHODOLOGY ===== */}
          <div id="sec-2" className="sh sh-a">2. Foundation, Setting Out &amp; Construction Methodology</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Setting Out / Marking</td>
                <td>Line thread &amp; right angle (string line method)</td>
                <td>Line thread + Total Station at footing level + Laser auto-level</td>
                <td>Line thread + Total Station at footing &amp; plinth level + Laser auto-level</td>
                <td>Line thread + Total Station at all structural levels + Laser auto-level throughout</td>
              </tr>
              <tr>
                <td>Earthwork &amp; Excavation</td>
                <td colSpan={4}>
                  Excavation for column footings &amp; wall foundations as per structural drawing. Backfilling with available excavated earth. (Disposal of excess earth *). (Earth brought from outside charged extra. Rock excavation if any, charged extra.)
                </td>
              </tr>
              <tr>
                <td>Soil (SBC assumed)</td>
                <td colSpan={4}>Footings 180 KN/m² at 5 ft depth. Any variation charged as actual.</td>
              </tr>
              <tr>
                <td>PCC (Plain Cement Concrete)</td>
                <td colSpan={4}>PCC 1:4:8 below wall foundations, RCC footings, toe walls, flooring &amp; below parking. DPC in mix 1:3:6 over size stone masonry.</td>
              </tr>
              <tr>
                <td>Formwork — Footings</td>
                <td>Excavation to required size (no side shuttering for footings)</td>
                <td>Side shuttering with MS / ply</td>
                <td>Side shuttering with MS / ply</td>
                <td>Side shuttering with MS / ply</td>
              </tr>
              <tr>
                <td>Formwork — Columns &amp; Pedestals</td>
                <td>MS box shuttering</td>
                <td>MS box shuttering</td>
                <td>MS / Ply box shuttering</td>
                <td>Ply box shuttering</td>
              </tr>
              <tr>
                <td>Formwork — Slabs &amp; Beams</td>
                <td>Casuarina poles, MS sheet &amp; ply</td>
                <td>Casuarina poles, MS sheet &amp; ply</td>
                <td>MS sheet, ply &amp; JackSpan</td>
                <td>MS sheet, ply &amp; JackSpan</td>
              </tr>
              <tr>
                <td>Bituminous Coating</td>
                <td className="na">Not included</td>
                <td className="na">Not included</td>
                <td>Bituminous coating applied to all concrete surfaces below plinth level</td>
                <td>Bituminous coating applied to all concrete surfaces below plinth level</td>
              </tr>
              <tr>
                <td>Anti-Termite Treatment (ATT)</td>
                <td className="na">Not included</td>
                <td>Standard ATT at plinth level</td>
                <td>ATT at foundation &amp; alongside periphery</td>
                <td>ATT at foundation &amp; alongside periphery</td>
              </tr>
              <tr>
                <td>Plinth Protection</td>
                <td>3&quot; thick concrete flagging, 2ft wide all around building</td>
                <td>3&quot; thick concrete flagging, 2ft wide all around building</td>
                <td>Paving tiles 2ft wide all around building &amp; flagging</td>
                <td>Designer paving 2ft wide tiles all around building &amp; flagging</td>
              </tr>
              <tr>
                <td>Scaffolding</td>
                <td>Wooden pole scaffolding</td>
                <td>Wooden pole scaffolding</td>
                <td>MS coupling scaffolding</td>
                <td>MS coupling scaffolding</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 3: STRUCTURE ===== */}
          <div id="sec-3" className="sh sh-a">3. Structure</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ceiling Height (FFL to FFL)</td>
                <td>10&apos; 0&quot;</td>
                <td>10&apos; 6&quot;</td>
                <td>11&apos; 0&quot;</td>
                <td>11&apos; 0&quot; to 12&apos; 0&quot;</td>
              </tr>
              <tr>
                <td>Plinth Height</td>
                <td colSpan={4}>1&apos;6&quot; to 2&apos;0&quot; from road level</td>
              </tr>
              <tr>
                <td>Steel Grade</td>
                <td>Fe500 TMT</td>
                <td>Fe550 TMT</td>
                <td>Fe550D TMT</td>
                <td>Fe550D TMT</td>
              </tr>
              <tr>
                <td>Steel Brands</td>
                <td>A-One Gold / Gopala or equivalent</td>
                <td>Prime Gold / Kamadhenu or equivalent</td>
                <td>JSW Neosteel / Jindal Panther or equivalent</td>
                <td>Indus / TATA Tiscon or equivalent</td>
              </tr>
              <tr>
                <td>Steel Basic Rate/kg</td>
                <td>~₹55–60 / kg</td>
                <td>~₹60–65 / kg</td>
                <td>~₹65–67 / kg</td>
                <td>~₹67–70 / kg</td>
              </tr>
              <tr>
                <td>Steel (Avg. Consumption)</td>
                <td>~2.5 kg/sq.ft</td>
                <td>~3.0 kg/sq.ft</td>
                <td>~3.0 kg/sq.ft</td>
                <td>~3.0 kg/sq.ft</td>
              </tr>
              <tr>
                <td>Cement Grade</td>
                <td>43 &amp; 53 Grade OPC/PPC</td>
                <td>43 &amp; 53 Grade OPC/PPC</td>
                <td>43 &amp; 53 Grade OPC/PPC</td>
                <td>43 &amp; 53 Grade OPC/PPC</td>
              </tr>
              <tr>
                <td>Cement Brands</td>
                <td>Maha / Bharathi or equivalent</td>
                <td>JSW / UltraTech or equivalent</td>
                <td>ACC / UltraTech or equivalent</td>
                <td>UltraTech / BirlaSuper or equivalent</td>
              </tr>
              <tr>
                <td>Cement (Basic Rate/bag)</td>
                <td>~₹330–355 / 50kg bag</td>
                <td>~₹350–375 / 50kg bag</td>
                <td>~₹355–380 / 50kg bag</td>
                <td>~₹370–400 / 50kg bag</td>
              </tr>
              <tr>
                <td>RCC Mix (Footings, Beams, Slabs)</td>
                <td>M20 RMC or Machine Mix</td>
                <td>M20/M25 RMC — as per structural design</td>
                <td>M25/M30 — as per structural design</td>
                <td>M25/M30 — as per structural design</td>
              </tr>
              <tr>
                <td>RCC Mix (Columns)</td>
                <td>M20 Site mix</td>
                <td>M20/M25 Site mix / RMC</td>
                <td>M25/M30 Machine Mix / RMC</td>
                <td>M25/M30 Machine Mix / RMC</td>
              </tr>
              <tr>
                <td>RMC Concrete (Basic Rate/Cum)</td>
                <td>HighTech Concrete or equiv. — ~₹4,400/cum (M20)</td>
                <td>Best Infra or equiv. — ~₹4,800/cum (M25)</td>
                <td>Aparna Concrete or equiv. — ~₹5,300/cum (M25)</td>
                <td>UltraTech RMC or equiv. — ~₹5,750/cum (M25)</td>
              </tr>
              <tr>
                <td>M-Sand</td>
                <td colSpan={4}>~₹1,000/MT (block work, concreting, tiling)</td>
              </tr>
              <tr>
                <td>Jelly / Coarse Aggregate</td>
                <td colSpan={4}>~₹1,100/MT · 12mm, 20mm, 40mm as per site requirements</td>
              </tr>
              <tr>
                <td>Lintels &amp; Chajjas</td>
                <td colSpan={4}>RCC lintels above all door &amp; window openings. Chajjas as per drawing.</td>
              </tr>
              <tr>
                <td>RCC Staircase</td>
                <td>RCC waist slab</td>
                <td>RCC waist slab</td>
                <td>RCC Folded plate</td>
                <td>RCC Folded plate</td>
              </tr>
              <tr>
                <td>Curing</td>
                <td colSpan={4}>Wet curing throughout construction; Curing material where required.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PAGE 3: SECTIONS 4, 5 & 7 ===== */}
        <div className="page-block page-3">
          {/* ===== SECTION 4: MASONRY & PLASTERING ===== */}
          <div id="sec-4" className="sh sh-a">4. Masonry &amp; Plastering</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SSM (Size Stone Masonry)</td>
                <td colSpan={4}>SSM below plinth beam for all external walls, 4&quot; PCC, two-course SSM, DPC above SSM included.</td>
              </tr>
              <tr>
                <td>Block Masonry</td>
                <td colSpan={4}>6&quot; / 8&quot; thick solid blocks in CM 1:6 for external/main walls; 4&quot; thick solid blocks in CM 1:4 for partition walls.</td>
              </tr>
              <tr>
                <td>Masonry Quality Control</td>
                <td colSpan={4}>Masonry laid to line, level, right angle and plumb. All corners raked, perpendicular joints staggered. Mortar joints uniform and fully filled.</td>
              </tr>
              <tr>
                <td>Solid Blocks (Basic rate/no.)</td>
                <td>Double Punch or equiv. 4&quot;~₹31/no. 6&quot;~₹37/no.</td>
                <td>Best Concrete or equiv. 4&quot;~₹35/no. 6&quot;~₹47/no. 8&quot;~₹59/no.</td>
                <td>Panchami or equiv. 4&quot;~₹38/no. 6&quot;~₹50/no. 8&quot;~₹65/no.</td>
                <td>APCO or equiv. 4&quot;~₹41/no. 6&quot;~₹55/no. 8&quot;~₹70/no. + TLU</td>
              </tr>
              <tr>
                <td>Concrete Bands</td>
                <td colSpan={4}>RCC band cast at 5 course in partition walls for crack control.</td>
              </tr>
              <tr>
                <td>Window Sill</td>
                <td colSpan={4}>PCC 1:3:6 window sill</td>
              </tr>
              <tr>
                <td>RCC/Masonry Joints</td>
                <td colSpan={4}>Joint mesh at all RCC and Masonry joints before plastering — internal &amp; external walls</td>
              </tr>
              <tr>
                <td>P-Sand (Plastering Sand)</td>
                <td colSpan={4}>~₹1,400/MT (for all plastering)</td>
              </tr>
              <tr>
                <td>Ceiling Plaster</td>
                <td colSpan={4}>0.5&quot; thick — CM 1:3 to ceiling &amp; soffits (43-grade / OPC cement &amp; P-Sand)</td>
              </tr>
              <tr>
                <td>Internal Wall Plaster</td>
                <td colSpan={4}>0.5&quot; thick — CM 1:4 smooth / rough finish (43-grade / OPC cement &amp; P-Sand)</td>
              </tr>
              <tr>
                <td>External Wall Plaster</td>
                <td colSpan={4}>0.75&quot; thick — CM 1:4 sponge finish (43-grade / OPC cement &amp; P-Sand)</td>
              </tr>
              <tr>
                <td>Plastering Quality Control</td>
                <td colSpan={4}>All plastering done plumb, to line and right angle. Neatly finished at junctions.</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 5: WATERPROOFING ===== */}
          <div id="sec-5" className="sh sh-a">5. Waterproofing</div>
          <table className="st">
            <thead>
              <tr>
                <th>Area</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toilet Floors</td>
                <td>Dr. Fixit / Fosroc or equivalent — waterproofing</td>
                <td>Dr. Fixit / Fosroc or equivalent — waterproofing</td>
                <td>Dr. Fixit / Fosroc + chemical waterproofing system</td>
                <td>Dr. Fixit Krystalline + chemical waterproofing system</td>
              </tr>
              <tr>
                <td>Sunken Toilet Slab</td>
                <td>Cinder filling + waterproofing treatment</td>
                <td>Cinder filling + waterproofing treatment</td>
                <td>Cinder filling + crystalline waterproofing</td>
                <td>Cinder filling + crystalline waterproofing</td>
              </tr>
              <tr>
                <td>Terrace Slab</td>
                <td>Standard system + terrace screed concreting with WP component</td>
                <td>Dr. Fixit / Fosroc + terrace screed with WP component</td>
                <td>Crystalline WP system + terrace screed with WP component</td>
                <td>Crystalline + chemical system + terrace screed with WP component</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 7: KITCHEN ===== */}
          <div id="sec-7" className="sh sh-a">7. Kitchen Fixtures &amp; Fittings</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kitchen Sink</td>
                <td>SS single sink (ISI marked)<br /><em>Up to ₹3,000</em></td>
                <td>SS / Granite / Carysil single or double sink<br /><em>Up to ₹6,000</em></td>
                <td>SS or Granite-finish sink (Futura/Carysil)<br /><em>Up to ₹8,000</em></td>
                <td>Granite-finish / Carysil premium sink<br /><em>Up to ₹10,000</em></td>
              </tr>
              <tr>
                <td>Main Sink Faucet</td>
                <td>Ess Ess / Cera or eq.<br /><em>Up to ₹1,300</em></td>
                <td>Parryware / Hindware<br /><em>Up to ₹2,000</em></td>
                <td>Jaquar / Roca or eq.<br /><em>Up to ₹3,500</em></td>
                <td>Jaquar / Grohe or eq.<br /><em>Up to ₹5,000</em></td>
              </tr>
              <tr>
                <td>Other Faucets &amp; Accessories</td>
                <td>ISI marked.</td>
                <td>Parryware / Hindware or eq.</td>
                <td>Jaquar / Roca or eq.</td>
                <td>Jaquar / Grohe or eq.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PAGE 4: SECTION 6 (FLOORING & WALL TILING) ===== */}
        <div className="page-block page-4">
          {/* ===== SECTION 6: FLOORING & WALL TILING ===== */}
          <div id="sec-6" className="sh sh-a">6. Flooring &amp; Wall Tiling</div>
          <table className="st">
            <thead>
              <tr>
                <th>Area</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Living &amp; Dining</td>
                <td>Vitrified (double charge/digital)<br /><em>Up to ₹60/sqft</em></td>
                <td>Vitrified (double charge/digital) / Granite<br /><em>Up to ₹100/sqft</em></td>
                <td>Premium Vitrified / Granite<br /><em>Up to ₹120/sqft</em></td>
                <td>Premium Vitrified / Granite / Marble<br /><em>Up to ₹150/sqft</em></td>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td>Vitrified<br /><em>Up to ₹50/sqft</em></td>
                <td>Vitrified<br /><em>Up to ₹70/sqft</em></td>
                <td>Vitrified / Granite<br /><em>Up to ₹90/sqft</em></td>
                <td>Vitrified / Granite<br /><em>Up to ₹110/sqft</em></td>
              </tr>
              <tr>
                <td>Kitchen Floor</td>
                <td>Vitrified<br /><em>Up to ₹50/sqft</em></td>
                <td>Vitrified<br /><em>Up to ₹70/sqft</em></td>
                <td>Vitrified / Granite<br /><em>Up to ₹90/sqft</em></td>
                <td>Vitrified / Granite<br /><em>Up to ₹110/sqft</em></td>
              </tr>
              <tr>
                <td>Balcony &amp; Open Areas</td>
                <td>Anti-skid tiles<br /><em>Up to ₹40/sqft</em></td>
                <td>Anti-skid tiles<br /><em>Up to ₹50/sqft</em></td>
                <td>Anti-skid tiles (premium)<br /><em>Up to ₹60/sqft</em></td>
                <td>Anti-skid tiles (premium)<br /><em>Up to ₹70/sqft</em></td>
              </tr>
              <tr>
                <td>Staircase</td>
                <td>Polished Granite with skirting<br /><em>Up to ₹70/sqft</em></td>
                <td>Polished Granite with skirting<br /><em>Up to ₹80/sqft</em></td>
                <td>Polished / Lapotra Granite<br /><em>Up to ₹110/sqft</em></td>
                <td>Polished / Lapotra Granite<br /><em>Up to ₹140/sqft</em></td>
              </tr>
              <tr>
                <td>Parking</td>
                <td>Anti-skid tiles<br /><em>Up to ₹40/sqft</em></td>
                <td>Anti-skid tiles<br /><em>Up to ₹50/sqft</em></td>
                <td>Vitrified Parking tiles<br /><em>Up to ₹65/sqft</em></td>
                <td>Designer Parking tiles<br /><em>Up to ₹70/sqft</em></td>
              </tr>
              <tr>
                <td>Toilet Floor</td>
                <td>Anti-skid tiles<br /><em>Up to ₹40/sqft</em></td>
                <td>Anti-skid tiles<br /><em>Up to ₹55/sqft</em></td>
                <td>Anti-skid tiles<br /><em>Up to ₹70/sqft</em></td>
                <td>Anti-skid tiles<br /><em>Up to ₹80/sqft</em></td>
              </tr>
              <tr>
                <td>Toilet Wall Dado</td>
                <td>Vitrified dado up to 7ft<br /><em>Up to ₹40/sqft</em></td>
                <td>Vitrified dado up to 7ft<br /><em>Up to ₹55/sqft</em></td>
                <td>Vitrified tiles — full height<br /><em>Up to ₹70/sqft</em></td>
                <td>Vitrified tiles — full height<br /><em>Up to ₹80/sqft</em></td>
              </tr>
              <tr>
                <td>Toilet Area (allocate per 500 sqft BUA)</td>
                <td>toilet up to 32 sqft</td>
                <td>toilet up to 40 sqft</td>
                <td>toilet up to 48 sqft</td>
                <td>toilet up to 56 sqft</td>
              </tr>
              <tr>
                <td>Kitchen Counter Slab</td>
                <td>Polished Granite<br /><em>Up to ₹90/sqft · Size: 16&apos;×2&apos;</em></td>
                <td>Polished Granite / Full Body Vitrified<br /><em>Up to ₹130/sqft · Size: 18&apos;×2&apos;</em></td>
                <td>Polished Granite / Full Body Vitrified<br /><em>Up to ₹160/sqft · Size: 20&apos;×2&apos;</em></td>
                <td>Polished Granite / Full Body Vitrified<br /><em>Up to ₹190/sqft · Size: 24&apos;×2&apos;</em></td>
              </tr>
              <tr>
                <td>Kitchen Wall Dado (Backsplash)</td>
                <td>Vitrified — 2ft above counter<br /><em>Up to ₹40/sqft</em></td>
                <td>Vitrified — 2ft above counter<br /><em>Up to ₹60/sqft</em></td>
                <td>Premium Vitrified — 2ft above counter<br /><em>Up to ₹70/sqft</em></td>
                <td>Premium Vitrified — 2ft above counter<br /><em>Up to ₹80/sqft</em></td>
              </tr>
              <tr>
                <td>Pooja Room Wall Tile</td>
                <td className="na">Not included</td>
                <td>Up to 70 sqft with highlighter<br /><em>₹50/sqft</em></td>
                <td>Up to 80 sqft with highlighter<br /><em>₹70/sqft</em></td>
                <td>Up to 90 sqft with highlighter<br /><em>₹80/sqft</em></td>
              </tr>
              <tr>
                <td>Pooja Room Granite</td>
                <td className="na">Not included</td>
                <td>Granite slab<br /><em>Up to ₹125/sqft up to 10sqft</em></td>
                <td>Granite slab<br /><em>Up to ₹150/sqft up to 12sqft</em></td>
                <td>Granite slab<br /><em>Up to ₹200/sqft up to 16sqft</em></td>
              </tr>
              <tr>
                <td>Tile Grouting</td>
                <td>Paper joint + cement grout (bathrooms only)</td>
                <td>Paper joint + cement grout (bathrooms only)</td>
                <td>Spacer joints + epoxy grout (bathrooms)</td>
                <td>Spacer joints + epoxy grout (bathrooms)</td>
              </tr>
              <tr>
                <td>Tile Size Limit</td>
                <td>Up to 2×2 ft</td>
                <td>Up to 4×2 ft</td>
                <td>Up to 6×4 ft</td>
                <td>No limitation</td>
              </tr>
              <tr>
                <td>Tiling — Method &amp; QA</td>
                <td colSpan={4}>All tiling laid plumb, to line and right angle. Tiles pre-wetted prior to laying. Joints uniform and fully grouted. Edges and corners neatly finished. All tiling tested for hollow spots.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PAGE 5: SECTIONS 8 & 9 ===== */}
        <div className="page-block page-5">
          {/* ===== SECTION 8: BATHROOMS & PLUMBING ===== */}
          <div id="sec-8" className="sh sh-a">8. Bathrooms, Sanitary &amp; Plumbing</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CP &amp; Sanitaryware (per bathroom)</td>
                <td>Up to ₹30,000<br /><em>Cera / Hindware or eq.</em></td>
                <td>Up to ₹50,000<br /><em>Jaquar Florentine or eq.</em></td>
                <td>Up to ₹70,000<br /><em>Kohler / Jaquar or eq.</em></td>
                <td>Up to ₹80,000<br /><em>Kohler / Grohe or eq.</em></td>
              </tr>
              <tr>
                <td>EWC / Commode</td>
                <td>Wall-hung or floor-mount EWC + health faucet</td>
                <td>Wall-mounted EWC + Geberit Kombifix concealed tank</td>
                <td>Wall-mounted EWC + concealed tank — Kohler or equiv.</td>
                <td>Premium EWC + concealed tank — Kohler / Grohe</td>
              </tr>
              <tr>
                <td>Washbasin</td>
                <td>Table top basin with pillar cock</td>
                <td>Table top basin with counter with pillar cock</td>
                <td>Premium table top basin — Kohler / Jaquar</td>
                <td>Designer basin on granite counter — Kohler / Grohe</td>
              </tr>
              <tr>
                <td>Shower &amp; Wall Mixer</td>
                <td>Wall mixer + OH shower</td>
                <td>3-way wall mixer + rain-flow OH shower — Jaquar Florentine</td>
                <td>Concealed diverter + rain-flow OH shower — Kohler / Jaquar</td>
                <td>Premium concealed diverter + rain-flow + hand shower — Kohler / Grohe</td>
              </tr>
              <tr>
                <td>Angular Cocks</td>
                <td>ISI marked</td>
                <td>Jaquar / Hindware or eq.</td>
                <td>Jaquar / Roca or eq.</td>
                <td>Kohler / Grohe or eq.</td>
              </tr>
              <tr>
                <td>Mirror, Soap Dish, Towel Rail</td>
                <td>Standard accessories</td>
                <td>Jaquar / Hindware or eq. accessories</td>
                <td>Kohler / Jaquar or eq. accessories</td>
                <td>Premium branded accessories</td>
              </tr>
              <tr>
                <td>Water Supply Pipes</td>
                <td colSpan={4}>CPVC SDR 11 — Ashirwad / Supreme / Astral or equivalent. External pipes on raised clamps. Solar/geyser provision for all bathrooms.</td>
              </tr>
              <tr>
                <td>Hot &amp; Cold Water Lines</td>
                <td>Cold supply lines only</td>
                <td>Separate hot &amp; cold for kitchen sink (duplex)</td>
                <td>Separate hot &amp; cold for all bathrooms &amp; kitchen</td>
                <td>Separate hot &amp; cold for all bathrooms &amp; kitchen</td>
              </tr>
              <tr>
                <td>Drainage / Sanitary Pipes</td>
                <td colSpan={4}>PVC — Supreme / Astral or equivalent. Separate sewage &amp; drainage lines. IC chambers &amp; sewage outlet to site boundary.</td>
              </tr>
              <tr>
                <td>Water Connection</td>
                <td colSpan={4}>Provision for inlet connection from corporation at sump wall.</td>
              </tr>
              <tr>
                <td>Solar / Geyser Provision</td>
                <td colSpan={4}>Solar water heater pipe lines for all bathrooms (equipment not included)</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 9: DOORS & WINDOWS ===== */}
          <div id="sec-9" className="sh sh-a">9. Doors &amp; Windows</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Door &amp; Window Openings Limit</td>
                <td>Up to 10% of total room wall area per room</td>
                <td>Up to 13% of total room wall area per room</td>
                <td>Up to 15% of total room wall area per room</td>
                <td>Up to 17% of total room wall area per room</td>
              </tr>
              <tr>
                <td>Main Door</td>
                <td>
                  Teak frame 3&quot;×5&quot;; 3&apos;6&quot;×7&apos;; 1.25&quot; teak shutter; brass antique fittings; mortise lock<br />
                  <em>Up to ₹20,000</em><br />
                  Finish: Melamine polish
                </td>
                <td>
                  Teak frame 3&quot;×5&quot;; 3&apos;×7&apos;; laminated WP teak shutter; brass antique fittings; mortise lock<br />
                  <em>Up to ₹30,000</em><br />
                  Finish: Hand polish
                </td>
                <td>
                  Teak frame 3.5&quot;×5&quot;; 3&apos;6&quot;×8&apos; teak shutter; brass antique fittings &amp; hardware<br />
                  <em>Up to ₹40,000</em><br />
                  Finish: PU spray
                </td>
                <td>
                  Teak frame 4&quot;×6&quot;; 4&apos;×8&apos; Burma/Ghana teak; digital biometric smart lock + brass antique fittings<br />
                  <em>Up to ₹50,000</em><br />
                  Finish: PU Polish
                </td>
              </tr>
              <tr>
                <td>Internal Doors</td>
                <td>
                  Sal frame 3&quot;×4&quot;; Flush / Membrane shutter 30mm; SS lock &amp; aldrops<br />
                  <em>Up to ₹7,000/door</em>
                </td>
                <td>
                  Sal / Honne / Red Mirandi frame 3&quot;×4&quot;; Moulded skin / laminated shutter 32mm<br />
                  <em>Up to ₹10,000/door</em>
                </td>
                <td>
                  Honne / Teak frame 3&quot;×4&quot;; Veneer-finished shutter 35mm; Europa / Godrej mortise lock<br />
                  <em>Up to ₹12,000/door</em>
                </td>
                <td>
                  Teak / Honne frame 3.5&quot;×5&quot;; Veneer-finished shutter 35mm; premium designer hardware<br />
                  <em>Up to ₹14,000/door</em>
                </td>
              </tr>
              <tr>
                <td>Bathroom Doors</td>
                <td>Sal frame 3&quot;×4&quot;; Waterproof shutter with laminate; cylindrical lock</td>
                <td>Sal/Honne frame 3&quot;×4&quot;; Waterproof laminated shutter; cylindrical lock</td>
                <td>Honne/Granite frame; Waterproof FRP / laminated shutter; premium lock</td>
                <td>Granite frame; Premium FRP / waterproof laminated designer shutter</td>
              </tr>
              <tr>
                <td>Windows</td>
                <td>2-track UPVC sliding with 5mm clear float glass + MS grill</td>
                <td>2.5-track UPVC sliding with mosquito mesh + 5mm glass + MS grill</td>
                <td>2.5/3-track UPVC (Prominance/Kommerling) + mosquito mesh + 5mm toughened/tinted glass</td>
                <td>3-track UPVC / Thermal aluminium + mosquito mesh + 6mm toughened/tinted glass + designer grill</td>
              </tr>
              <tr>
                <td>Ventilators</td>
                <td>Aluminium / UPVC louvers with pinhead glass + provision for exhaust</td>
                <td>UPVC louvers with pinhead glass + exhaust provision</td>
                <td>UPVC top-hung / louvers + exhaust provision</td>
                <td>UPVC top-hung / louvers + exhaust provision</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PAGE 6: SECTIONS 10, 11 & 12 ===== */}
        <div className="page-block page-6">
          {/* ===== SECTION 10: PAINTING ===== */}
          <div id="sec-10" className="sh sh-a">10. Painting &amp; Finishing</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Interior Walls</td>
                <td>1 coat primer + 2 coats Birla/JK putty + 2 coats Asian Paints Tractor Emulsion</td>
                <td>1 coat primer + 2 coats Birla/JK putty + 2 coats Asian Paints Premium Emulsion</td>
                <td>1 coat primer + 2 coats Birla/JK putty + 2 coats Asian Paints Royale Luxury Emulsion</td>
                <td>1 coat primer + 2 coats Birla/JK putty + 2 coats Asian Royale Matt/Shyne / PU finish</td>
              </tr>
              <tr>
                <td>Exterior Walls</td>
                <td>1 coat exterior primer + 2 coats Asian Paints Ace / Apex</td>
                <td>1 coat primer + 2 coats Asian Paints Apex weather-proof emulsion</td>
                <td>1 coat primer + 2 coats Asian Paints Apex Ultima weather-proof emulsion</td>
                <td>1 coat primer + 2 coats Asian Paints Apex Ultima Protek (10-yr warranty) / texture finish</td>
              </tr>
              <tr>
                <td>Ceiling</td>
                <td>1 coat primer + 2 coats Tractor Emulsion</td>
                <td>1 coat primer + 2 coats Tractor Emulsion</td>
                <td>1 coat primer + 2 coats Premium Emulsion</td>
                <td>1 coat primer + 2 coats Royale / Premium Emulsion</td>
              </tr>
              <tr>
                <td>Metal &amp; Wood Works</td>
                <td>1 coat red oxide primer + 2 coats synthetic enamel paint (Asian/Berger)</td>
                <td>1 coat red oxide + 2 coats synthetic enamel paint (Asian/Berger)</td>
                <td>1 coat primer + 2 coats premium enamel paint (Asian/Berger)</td>
                <td>1 coat primer + 2 coats premium enamel / PU spray on metal</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 11: ELECTRICAL ===== */}
          <div id="sec-11" className="sh sh-a">11. Electrical Works</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wires &amp; Cables</td>
                <td>Finolex / Anchor / Polycab — FRLS</td>
                <td>Finolex / Anchor / Polycab — FRLS</td>
                <td>Finolex / Havells / Polycab — FRLSH</td>
                <td>Finolex / Havells / RR Kabel — FRLSH / ZHFR</td>
              </tr>
              <tr>
                <td>Switches &amp; Plates</td>
                <td>Anchor Rider / GreatWhite or equiv.</td>
                <td>Anchor Roma / Legrand Mylinc or equiv.</td>
                <td>Legrand Arteor / Schneider AvatarOn or equiv.</td>
                <td>Legrand Arteor / Schneider AvatarOn / touch modular switches</td>
              </tr>
              <tr>
                <td>Conduit Pipes</td>
                <td colSpan={4}>Heavy-duty VIP / National / Precision PVC concealed conduits with pull wires</td>
              </tr>
              <tr>
                <td>Distribution Board (DB)</td>
                <td>Standard DB with MCB (IndoAsian/Anchor)</td>
                <td>Legrand / Schneider DB with MCB &amp; ELCB/RCCB</td>
                <td>Legrand / Schneider DB with MCB, RCCB &amp; phase isolator</td>
                <td>Legrand / Schneider DB with MCB, RCCB, phase isolator &amp; surge protector</td>
              </tr>
              <tr>
                <td>AC Points</td>
                <td>Provision for Master Bedroom only</td>
                <td>Provision for all Bedrooms</td>
                <td>Provision for all Bedrooms + Living Room</td>
                <td>Provision for all Bedrooms, Living, Dining &amp; Home Theatre</td>
              </tr>
              <tr>
                <td>Geyser &amp; Chimney Points</td>
                <td>All bathrooms (1 point each) + Kitchen chimney</td>
                <td>All bathrooms + Kitchen chimney + Hob</td>
                <td>All bathrooms + Kitchen chimney + Hob + Dishwasher</td>
                <td>All bathrooms + Kitchen chimney + Hob + Dishwasher + RO</td>
              </tr>
              <tr>
                <td>EV Charging Point</td>
                <td className="na">Not included</td>
                <td>1 point in parking (16A)</td>
                <td>1 dedicated fast-charging provision (32A) in parking</td>
                <td>1 dedicated fast-charging point (32A) in parking + second standard point</td>
              </tr>
              <tr>
                <td>UPS / Inverter Provision</td>
                <td>Wiring conduit provision to 1 central point</td>
                <td>Dedicated wiring with bypass switch to all light/fan points</td>
                <td>Dedicated wiring with bypass switch + separate battery space</td>
                <td>Dedicated wiring + smart inverter integration point</td>
              </tr>
              <tr>
                <td>TV &amp; Data Points</td>
                <td>Living room (1 TV point)</td>
                <td>Living + Master Bedroom (TV + Data)</td>
                <td>Living + all Bedrooms (TV + RJ45 Data)</td>
                <td>All rooms (TV + Cat6 Data) + centralized Wi-Fi access point conduit</td>
              </tr>
              <tr>
                <td>Earthing</td>
                <td>Standard chemical / charcoal earthing pit (1 no.)</td>
                <td>Chemical earth pit (2 nos. — 1 for power, 1 for lighting)</td>
                <td>Copper plate / pipe chemical earth pit (2 nos.)</td>
                <td>Advanced chemical earth pit (3 nos. — Power, Light &amp; Sensitive Electronics)</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 12: WATER STORAGE ===== */}
          <div id="sec-12" className="sh sh-a">12. Water Storage &amp; Services</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Underground Sump — Construction</td>
                <td>6&quot; solid block masonry with GI wire mesh + waterproof plastering (2 coats Dr. Fixit or equiv.)</td>
                <td>6&quot; solid block masonry with GI wire mesh + waterproof plastering (2 coats Dr. Fixit or equiv.)</td>
                <td>6&quot; solid block with reinforced double wire mesh with waterproof plastering (inside &amp; outside)</td>
                <td>RCC sump with waterproofing plaster — walls, floor &amp; roof</td>
              </tr>
              <tr>
                <td>Underground Sump — Capacity</td>
                <td>Up to 8,000 Litres</td>
                <td>Up to 8,000 Litres</td>
                <td>Up to 10,000 Litres</td>
                <td>Up to 10,000 Litres</td>
              </tr>
              <tr>
                <td>Overhead Tank (OHT)</td>
                <td>Sintex double-layered — 1,000 L</td>
                <td>Sintex double-layered — 1,500 L</td>
                <td>Sintex double-layered — 2,000 L</td>
                <td>Sintex double-layered — 2,000 L<br /><em>Additional capacity @ ₹9/L</em></td>
              </tr>
              <tr>
                <td>IC Chambers</td>
                <td colSpan={4}>Inspection chambers &amp; sewage outlet. Costs based on measured area; variations charged as approved variations.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PAGE 7: SECTIONS 13, 14, 15, EXCLUSIONS & T&C ===== */}
        <div className="page-block page-7">
          {/* ===== SECTION 13: RAILINGS, GATE & COMPOUND ===== */}
          <div id="sec-13" className="sh sh-a">13. Railings, Grills, Gate, Compound &amp; Site Works</div>
          <table className="st">
            <thead>
              <tr>
                <th>Item</th>
                <th className="th4">ADC STANDARD</th>
                <th className="th3">ADC SUPERIOR</th>
                <th className="th2">ADC PREMIUM</th>
                <th className="th1">ADC EXECUTIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Staircase &amp; Balcony Railing</td>
                <td>MS Railing<br /><em>₹400/running ft</em></td>
                <td>MS Railing<br /><em>₹550/running ft</em></td>
                <td>SS 304 Grade Glass Railing<br /><em>₹800/running ft</em></td>
                <td>SS 304 Grade Glass Railing<br /><em>₹1,000/running ft</em></td>
              </tr>
              <tr>
                <td>Window Grills</td>
                <td>Basic MS grill with enamel paint<br /><em>₹150/sqft</em></td>
                <td>MS grill with enamel paint<br /><em>₹165/sqft</em></td>
                <td>Designer MS grill with enamel paint<br /><em>₹180/sqft</em></td>
                <td>Designer MS grill with enamel spray paint<br /><em>₹210/sqft</em></td>
              </tr>
              <tr>
                <td>Parapet Wall</td>
                <td colSpan={4}>3&apos; height masonry parapet wall, finished with coping concrete</td>
              </tr>
              <tr>
                <td>Compound Wall</td>
                <td>4&quot; solid blocks; plastered &amp; painted both sides; up to 4 ft above DPC level</td>
                <td>6&quot;/4&quot; solid blocks; plastered &amp; painted; up to 5 ft above DPC level</td>
                <td>6&quot;/4&quot; solid blocks; plastered &amp; painted; 5 ft above DPC</td>
                <td>6&quot;/4&quot; solid blocks; plastered &amp; painted; 5 ft above DPC</td>
              </tr>
              <tr>
                <td>Main Gate</td>
                <td>Designer MS Gate<br /><em>₹280/sqft · up to 50 sqft</em></td>
                <td>Designer MS Gate<br /><em>₹380/sqft · up to 50 sqft</em></td>
                <td>Designer Gate with Shera boards<br /><em>₹410/sqft · up to 50 sqft</em></td>
                <td>Designer Gate with Shera boards / CNC design<br /><em>₹500/sqft · up to 50 sqft</em></td>
              </tr>
              <tr>
                <td>Site Levelling</td>
                <td colSpan={4}>Earth levelling all-round building as required for formation levels</td>
              </tr>
            </tbody>
          </table>

          {/* ===== SECTION 14: QUALITY ASSURANCE ===== */}
          <div id="sec-14" className="sh sh-a">14. ADC Quality Assurance — Stage-Wise Inspection Protocol</div>
          <div className="qa-grid" style={{ marginTop: 0 }}>
            <div className="qa-card">
              <h5>Foundation &amp; Structure</h5>
              <div className="qa-item">Setting out / profile verification</div>
              <div className="qa-item">Reinforcement check before pour</div>
              <div className="qa-item">Formwork inspection &amp; cover blocks</div>
              <div className="qa-item">Concrete quality &amp; slump test (RMC)</div>
              <div className="qa-item">Curing records maintained</div>
            </div>
            <div className="qa-card">
              <h5>Masonry &amp; Plastering</h5>
              <div className="qa-item">Block quality check on delivery</div>
              <div className="qa-item">Masonry alignment — plumb &amp; line</div>
              <div className="qa-item">RCC/masonry joint mesh treatment</div>
              <div className="qa-item">Plastering levels &amp; plumb check</div>
              <div className="qa-item">Surface prep before paint</div>
            </div>
            <div className="qa-card">
              <h5>MEP Systems</h5>
              <div className="qa-item">Plumbing pressure testing</div>
              <div className="qa-item">Electrical conduit routing check</div>
              <div className="qa-item">Wiring inspection before closing</div>
              <div className="qa-item">DB earthing &amp; MCB check</div>
              <div className="qa-item">Waterproofing test (flood test)</div>
            </div>
            <div className="qa-card">
              <h5>Finishes &amp; Handover</h5>
              <div className="qa-item">Tile alignment, levels &amp; grout</div>
              <div className="qa-item">Door &amp; window fit and hardware</div>
              <div className="qa-item">Painting surface preparation check</div>
              <div className="qa-item">Final snag list preparation</div>
              <div className="qa-item">Snag rectification before handover</div>
              <div className="qa-item">Final inspection &amp; handover sign-off</div>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--mu)', marginBottom: '12px' }}>
            Material approvals, RMC records, steel delivery records, stage photographs, waterproofing records, electrical/plumbing test records, approved variations and final snag lists maintained throughout the project.
          </div>

          {/* ===== SECTION 15: WARRANTY ===== */}
          <div id="sec-warranty" className="sh sh-a">15. Warranty, Service &amp; Client Promise</div>
          <div className="info-box" style={{ marginTop: 0 }}>
            <strong>Structural Warranty:</strong> 10 years (applicable if structural design is proof checked) &nbsp;|&nbsp;
            <strong>Waterproofing Warranty:</strong> 5 years &nbsp;|&nbsp;
            <strong>Construction &amp; Service Guarantee:</strong> 1 year from handover
            <br /><br />
            <strong>Product Fixtures Warranty:</strong> All plumbing fixtures, electrical switches/plates, UPVC window frames, main/pooja/internal doors, interior plywood, and hardware — covered under the brand warranty of the selected make.
            <br /><br />
            <strong>Transparent Variation Policy:</strong> No surprise additions. Any client-requested change or additional work outside the agreed package shall be identified, priced separately, submitted to the client, approved in writing before execution, and recorded as a Variation Order. All documentation on Stamp paper.
          </div>

          <div className="info-box">
            <strong>The ADC Client Promise:</strong> You choose the package. You know exactly what is included. You know what is excluded. You approve every variation in writing before execution. You pay only for the work you have agreed to. <em>Acme Designs &amp; Constructions — Quality Construction | Transparent Specifications | Professional Execution.</em>
          </div>

          {/* EXCLUSIONS */}
          <div id="sec-exclusions" className="excl-box">
            <h4>Common Exclusions — All Packages (Charged as Approved Variations if Required)</h4>
            <div className="excl-grid">
              <div className="xi">Interior works: kitchen cabinets, wardrobes, false ceiling, TV unit</div>
              <div className="xi">Electrical fittings &amp; fixtures (fans, lights, bulbs, ACs, geysers)</div>
              <div className="xi">Appliances: hob, chimney, solar water heater, jacuzzi</div>
              <div className="xi">Lift / elevator: equipment, panel, inside civil, cladding, lift car, govt. approvals</div>
              <div className="xi">Extra elevation works: projections, pergolas, designer cornice / cladding</div>
              <div className="xi">Landscape, garden, gates (compound gates beyond package spec), hardscape</div>
              <div className="xi">Rainwater harvesting tank &amp; filter system</div>
              <div className="xi">Borewell &amp; pump</div>
              <div className="xi">Generator / DG set / power backup system</div>
              <div className="xi">BESCOM electrical transformer; meter &amp; main line cable; earthing</div>
              <div className="xi">Rock excavation — charged as actual</div>
              <div className="xi">Earth fill from outside — charged as actual</div>
              <div className="xi">Sliding doors</div>
              <div className="xi">Basement construction &amp; retaining wall</div>
              <div className="xi">Pile foundation / eccentric footing (if required by soil test)</div>
              <div className="xi">Home automation / smart systems &amp; related wiring</div>
              <div className="xi">Front facade (special finishes, cladding) &amp; compound wall / gates (if outside package scope)</div>
              <div className="xi">Road-cutting charges for electricity / sewage line installation</div>
              <div className="xi">Main panel board &amp; main line from pole to panel board (client scope)</div>
            </div>
          </div>

          {/* NOTES & T&C */}
          <div className="tc-box">
            <h4>Notes &amp; Terms and Conditions</h4>
            <div className="tc-li">All rates are in ₹ per sq.ft of built-up area (roof outer edge to outer edge at all floors including parking, balconies, cutouts, ducts, staircase &amp; utility). <strong>18% GST applicable additionally.</strong></div>
            <div className="tc-li">Indicated basic rates include cost of raw materials, transport to site and L&amp;U, excluding GST. Any increase in market rates above these base prices shall be charged to the client accordingly.</div>
            <div className="tc-li">Items not mentioned in the package or outside site boundary shall be accommodated only after client approves a written Variation Order.</div>
            <div className="tc-li">Soil testing is in client scope. Soil factors, foundation type, and other variations depending on structural design &amp; SBC of the plot shall be extra as mutually agreed.</div>
            <div className="tc-li">Water &amp; electricity to be provided by client at no extra cost. All statutory temporary &amp; permanent deposits to be borne by client.</div>
            <div className="tc-li">Space to stock materials, labour shed &amp; washroom facility to be provided adjacent to the construction site, free of charge by client. Sheds &amp; housing provided by ADC.</div>
            <div className="tc-li">Barricading and covering-up requirements of the layout/township — for construction plot and NOC plot — to be borne by client as actual.</div>
            <div className="tc-li">All govt. fees, deposits &amp; statutory charges to BBMP, BIAPPA, CUDA, MUDA, Police, Locals, BESCOM, BWSSB etc. are not included. ADC will coordinate and liaise at no extra cost.</div>
            <div className="tc-li">Rates quoted are valid for <strong>30 days</strong> from date of quotation. Once the Contract is signed, approved rates are valid for <strong>12 months</strong> from date of signing as per the T&amp;C of the signed Contract.</div>
            <div className="tc-li">Payment terms: As per attached Annexure in the Building Contract Agreement.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
