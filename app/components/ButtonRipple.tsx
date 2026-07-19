"use client";

import { MouseEvent } from "react";

export function rippleEffect(
  e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
) {
  const button = e.currentTarget;

  const circle = document.createElement("span");

  const diameter = Math.max(button.clientWidth, button.clientHeight);

  const radius = diameter / 2;

  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;

  circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;

  circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;

  circle.className = "ripple";

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) ripple.remove();

  button.appendChild(circle);
}