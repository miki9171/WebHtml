function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomImage() {
  // 画像ファイルのリストを定義
  var images = [
      'lantern/lantern2.png',
      'lantern/lantern3.png',
      'lantern/20240724_231357.png',
      'lantern/20240728_122858.png',
      'lantern/20240728_134550.png',
      'lantern/20240728_165636.png',
      'lantern/20240730_001135.png',
      'lantern/20240730_195634.png',
      'lantern/20240730_224042.png',
      'lantern/20240730_224744.png',
      'lantern/20240730_235341.png',
      'lantern/20240731_001911.png',
      'lantern/20240731_002330.png',
      'lantern/20240731_155838.png',
      'lantern/20240731_165315.png',
      'lantern/20240731_182316.png',
      'lantern/20240731_184140.png',
      'lantern/20240731_184217.png',
      'lantern/20240731_184238.png',
      'lantern/無題1339_20240730230852.png'
      // 追加の画像ファイルをここにリストする
  ];
  // ランダムに画像を選択
  var index = getRandomInt(0, images.length);
  return images[index];
}

function createLantern() {
  var container = document.querySelector('.container');

  // ランダムなサイズ、位置、速度を生成
  var size = getRandomInt(50, 150); // ランタンの大きさ（px）
  var left = getRandomInt(0, window.innerWidth - size); // 横位置
  var duration = getRandomInt(5, 15); // 上昇速度（秒）
  var zIndex = Math.round(size); // サイズに応じてz-indexを設定
  var imageUrl = getRandomImage(); // ランダムな画像を取得

  // ランタンの要素を作成
  var lantern = document.createElement('div');
  lantern.classList.add('lantern');
  lantern.style.width = size + 'px';
  lantern.style.height = size + 'px';
  lantern.style.left = left + 'px';
  lantern.style.bottom = '-' + size + 'px'; // 初期位置を設定
  lantern.style.transition = 'bottom ' + duration + 's linear';
  lantern.style.backgroundImage = 'url("' + imageUrl + '")'; // ランダムな背景画像を設定
  lantern.style.zIndex = zIndex; // z-indexを設定

  // ランタンをクリックしたときの処理
  lantern.addEventListener('click', function() {
      var modal = document.getElementById('modal');
      var modalImg = document.getElementById('modalImage');
      modal.style.display = 'flex'; // モーダルを表示
      modalImg.src = imageUrl; // 画像URLを設定
  });

  // ランタンをコンテナに追加
  container.appendChild(lantern);

  // 少し遅れてスタイル変更を行う
  setTimeout(function() {
      lantern.style.bottom = '100vh';
  }, 50);

  // 上昇完了後にランタンを削除
  setTimeout(function() {
      container.removeChild(lantern);
  }, duration * 1000 + 50);
}

// モーダルを閉じる処理
var modal = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];

span.onclick = function() {
  modal.style.display = 'none';
}

// 一定間隔でランタンを生成
setInterval(createLantern, 1000); // 1秒ごとにランタンを生成
