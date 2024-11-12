import React, { useState } from "react";
import '../css/ReserveMain.css';

function ReserveMain() {
  const [reservationDate, setReservationDate] = useState("");

  const handleDateChange = (e) => {
    setReservationDate(e.target.value);
  };

  return (
    <div className="main" >
      <div className="restaurant-page">
        {/* 상단: 식당 이름, 설명, 별점 */}
        <header className="restaurant-header">
          {/* 배경 이미지 등 */}
        </header>

        {/* 중간: 매장 소개, 주소, 영업시간, 메뉴 */}
        <section className="restaurant-info">
          <h1 className="restaurant-title">레슐렝 코리아</h1>
          <p className="restaurant-description">레스토랑 예약 대행 사이트</p>
          <div className="rating">
            <span>★★★★☆</span> {/* 별점 표시 */}
          </div>
         {/* 주소와 영업시간, 지도 배치 */}
          <div className="info-container">
            <div className="left-info">
                
          <h2>매장소개</h2>
          <p>3대 소울푸드 맛집</p>
              <div className="address">
                <h3>주소</h3>
                <p>경기도 수원시 장안구 정조로 940-1</p>
              </div>

              <div className="business-hours">
                <h3>영업시간</h3>
                <p>Mon - Fri: 10:00 AM - 9:00 PM</p>
                <p>Sat - Sun: 11:00 AM - 10:00 PM</p>
              </div>
              <div className="menu">
            <h3>메뉴</h3>
            <ul>
              <li>돈까스</li>
              <li>국밥</li>
              <li>제육</li>
            </ul>
          </div>
            </div>

            {/* 오른쪽에 지도 */}
            <div className="google-map">
              <h3>지도</h3>
              <div className="map-placeholder">
                {/* 임시로 구글 맵 영역을 대체하는 박스 */}
                <p>  .</p>
                <div style={{ width: '100%', height: '400px', backgroundColor: '#e0e0e0', textAlign: 'center', lineHeight: '400px' }}>
                  <span>추후 지도 API로 구현.</span>
                </div>
              </div>
            </div>
          </div>


        </section>

        {/* 하단: 리뷰 구역 */}
        <section className="reviews">
          <h2>Reviews</h2>
          <div className="review">
            <p>리뷰 페이지에서 받아온 리뷰 클릭시 리뷰 페이지로</p>
            <span> - 작성자</span>
          </div>
          <div className="review">
            <p>리뷰 페이지에서 받아온 리뷰 클릭시 리뷰 페이지로</p>
            <span>- 두개</span>
          </div>
        </section>

        {/* 예약 날짜 선택 */}
        <section className="reservation">
          <h2>Make a Reservation</h2>

          <button className="reserve-btn" >
             예약하기 
          </button>
        </section>
      </div>
    </div>
  );
}

export default ReserveMain;
