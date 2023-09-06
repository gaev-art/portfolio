import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


export const Main = () => {

  const [animationStarted, setAnimationStarted] = useState(false);

  function animation() {

    if (animationStarted) {
      return;
    }
    setAnimationStarted(true);

    const canvas = document.createElement('canvas');
    const main = document.querySelector('#main')
    main.append(canvas);
    canvas.style.display = 'block';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const gl = canvas.getContext('webgl2');
    if (!gl) {
      alert('require webgl 2.0, bye')
    }

    const vss = `#version 300 es
in vec2 p;
void main() {
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

    const fss = `#version 300 es
precision mediump float;
out vec4 o;
uniform vec4 c;
void main() {
  o = c;
}
`;

    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vss);
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(vs));
      throw 1;
    }

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fss);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fs));
      throw 2;
    }

    const prg = gl.createProgram();
    gl.attachShader(prg, vs);
    gl.attachShader(prg, fs);
    gl.linkProgram(prg);
    if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prg));
      throw 3;
    }

    gl.detachShader(prg, vs);
    gl.deleteShader(vs);
    gl.detachShader(prg, fs);
    gl.deleteShader(fs);

    const $p = gl.getAttribLocation(prg, 'p');
    const $c = gl.getUniformLocation(prg, 'c');

    const va = gl.createVertexArray();
    gl.bindVertexArray(va);

    const N = 300;
    let ps;
    {
      ps = new Float32Array(2 + N * 2 * 2);
      ps[0] = 0;
      ps[1] = 0;
      let j = 2;
      for (let i = 0; i < N; ++i) {
        ps[j++] = Math.random() * 2 - 1;
        ps[j++] = Math.random() * 2 - 1;
        ps[j++] = Math.random() * 2 - 1;
        ps[j++] = Math.random() * 2 - 1;
      }
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, ps, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray($p);
    gl.vertexAttribPointer(
      $p,
      2, gl.FLOAT,
      false,
      0,
      0
    );

    let idxs;
    {
      idxs = new Uint16Array(3 * N);
      let j = 0;
      for (let i = 0; i < N; ++i) {
        idxs[j++] = 0;
        idxs[j++] = 1 + i * 2;
        idxs[j++] = 2 + i * 2;
      }
    }

    const ibuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idxs, gl.STATIC_DRAW);

    gl.bindVertexArray(null);


    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0.1, 0.1, 0.1, 1);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);
    gl.disable(gl.CULL_FACE);
    gl.useProgram(prg);
    gl.bindVertexArray(va);



    function f() {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform4fv($c, [0.3, 0.3, 0.3, 0.03]);
      gl.drawElements(
        gl.TRIANGLES,
        idxs.length,
        gl.UNSIGNED_SHORT,
        0
      );
    }
    f();

    gl.bindBuffer(gl.ARRAY_BUFFER, buf);

    document.body.onmousemove = (e) => {
      ps[0] = e.clientX / window.innerWidth * 2 - 1;
      ps[1] = -1 * (e.clientY / window.innerHeight * 2 - 1);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2)); // that's why DYNAMIC_DRAW
      f();
    }
  }

  useEffect(() => {
    requestAnimationFrame(animation);
    animation();
  }, []);


  return (
    <main id='main'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
        <h1>GAEV ARTEM </h1>
        <h2>FRONTEND DEVELOPER</h2>
        <NavLink to={'/about'}>about me</NavLink>
      </div>
    </main >
  )
}
