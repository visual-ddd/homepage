import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="Visual-DDD">
            <Logo height={33} width={33} />
            <span class={styles.title}>Visual-DDD</span>
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://visual-ddd.github.io/doc/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          {/* <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
});
