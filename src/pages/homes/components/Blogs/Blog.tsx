// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import img1 from './images/blog1.jpg'
// import img2 from './images/blog2.jpg'
// import img3 from './images/blog3.jpg'
// import img4 from './images/blog4.jpg'
// import './blog.scss'
// import Footer from '@components/Footers/Footer'

// function Blog() {
//     return (
//         <div className='blog-container'>
//             <div className="notice">
//                 <ul>
//                     <li>IMPORTANT NOTICE:</li>
//                     <li>- Special Price for Online and All Stores</li>
//                     <li>- Product Sampling Programme </li>
//                     <li>- [UNIQLO VIETNAM] OFFICIAL RECRUITMENT AND CONTACT CHANNELS</li>
//                     <li>- VAT REDUCTION TO 8% from July 01, 2023</li>
//                 </ul>
//             </div>
//             <div>
//                 <h2>UNIQLO APP BENEFITS</h2>
//             </div>
//             <div className='blog-cards'>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={img1} />
//                     <Card.Body>
//                         <Card.Title>WELCOME COUPON</Card.Title>
//                         <Card.Text>
//                             Download UNIQLO app now and get a welcome coupon for your first order on app.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={img2} />
//                     <Card.Body>
//                         <Card.Title>SCAN PRODUCT BARCODE</Card.Title>
//                         <Card.Text>
//                             Scan the barcode on product tag to easily check whether it's in stock online and in stores.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={img3} />
//                     <Card.Body>
//                         <Card.Title>STAY UPDATED WITH NEWS</Card.Title>
//                         <Card.Text>
//                             Receive our latest information including new arrivals, special offers and feature news.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={img4} />
//                     <Card.Body>
//                         <Card.Title>CLICK & COLLECT</Card.Title>
//                         <Card.Text>
//                             Shop online anytime and collect your orders at any store of UNIQLO, free shipping fee.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </div>
//             <a href="#">
//                 <div className='viewmore'>
//                     <span className='back'>View More</span>
//                 </div>
//             </a>
//             <div >
//                 <h2>Information</h2>
//                 <div className='information'>
//                     <ul>
//                         <li>SHOPPING MADE EASY</li>
//                         <li>Style Hint</li>
//                         <li>Subscribe to E-Newsletter</li>
//                     </ul>
//                     <ul>
//                         <li>Bulk Order</li>
//                         <li>UNIQLO APP</li>
//                         <li>Press Release</li>
//                     </ul>
//                 </div>
//                 <Footer />
//             </div>
//         </div>

//     );
// }

// export default Blog;