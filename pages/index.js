import { useState } from 'react';

export default function Home() {
  const [reservationTime, setReservationTime] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [message, setMessage] = useState('');

  const courseOptions = {
    'カット': 7000,
    'カット＆パーマ': 15000,
    'カット＆カラー': 10000,
  };

  const handleSubmit = () => {
    if (!reservationTime || !selectedStaff || !selectedCourse) {
      setMessage('全てのフィールドを入力してください。');
      return;
    }

    const amount = courseOptions[selectedCourse];
    setMessage(`予約しました！\n担当者: ${selectedStaff}\nコース: ${selectedCourse}\n金額: ${amount}円`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>予約フォーム</h1>
      <div>
        <label>予約時間:
          <input
            type="datetime-local"
            value={reservationTime}
            onChange={(e) => setReservationTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>担当者:
          <select
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="細川">細川</option>
            <option value="山田">山田</option>
          </select>
        </label>
      </div>
      <div>
        <label>コース:
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">選択してください</option>
            {Object.keys(courseOptions).map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleSubmit}>予約する</button>
      {message && (
        <p>{message}</p>
      )}
    </div>
  );
}
