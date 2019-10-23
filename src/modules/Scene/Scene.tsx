import * as Matter from 'matter-js';

export class Scene {
   constructor(SceneElement: HTMLElement) {
      const Engine = Matter.Engine;
      const Render = Matter.Render;
      const World = Matter.World;
      const Bodies = Matter.Bodies;

      const engine = Engine.create();

      const render = Render.create({
         element: SceneElement,
         engine,
      });

      const boxA = Bodies.rectangle(400, 200, 80, 80);
      const boxB = Bodies.rectangle(450, 50, 80, 80);
      const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

      World.add(engine.world, [boxA, boxB, ground]);

      Engine.run(engine);

      Render.run(render);
   }
}
