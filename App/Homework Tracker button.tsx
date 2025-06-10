body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  color: #fff;
  width: 300px;
  margin: 0;
  padding: 10px;
  text-align: center;
}

h1, h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.cursor-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.cursor-item {
  border: 2px solid #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.cursor-item:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.cursor-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#colorPicker {
  margin-top: 10px;
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 8px;
}
