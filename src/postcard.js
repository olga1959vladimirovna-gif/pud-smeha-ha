function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Не удалось загрузить иллюстрацию. Попробуйте ещё раз.'));
    image.src = src;
  });
}

export async function downloadPostcard(quote) {
  const image = await loadImage('/illustrations/mail.webp');
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1400;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Браузер не смог создать открытку. Попробуйте другой браузер.');
  const gradient = ctx.createLinearGradient(0, 0, 1200, 1400);
  gradient.addColorStop(0, '#fffbeb');
  gradient.addColorStop(1, '#fce7f3');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 1400);
  ctx.strokeStyle = '#d6a54d';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(42, 42, 1116, 1316, 35);
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#92400e';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText('Маленькая радость для тебя', 600, 140);
  const scale = Math.min(460 / image.width, 430 / image.height);
  ctx.drawImage(image, 600 - image.width * scale / 2, 190, image.width * scale, image.height * scale);
  ctx.font = 'bold 39px sans-serif';
  ctx.fillStyle = '#292524';
  const lines = [];
  let line = '';
  for (const word of quote.text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > 930 && line) { lines.push(line); line = word; }
    else line = next;
  }
  if (line) lines.push(line);
  const lineHeight = 60;
  const top = 770 - Math.min(lines.length, 9) * lineHeight / 2;
  lines.forEach((text, i) => ctx.fillText(text, 600, top + i * lineHeight));
  ctx.fillStyle = '#92400e';
  ctx.font = 'bold 38px sans-serif';
  ctx.fillText('Почём пуд СМЕХА?', 600, 1165);
  ctx.font = '28px sans-serif';
  ctx.fillStyle = '#57534e';
  ctx.fillText('pud-smeha-ha.vercel.app', 600, 1225);
  ctx.font = '25px sans-serif';
  ctx.fillText('Сохрани улыбку. Передай дальше.', 600, 1280);
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('Не удалось сохранить открытку. Попробуйте ещё раз.');
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'malenkaya-radost.png';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  return blob;
}
