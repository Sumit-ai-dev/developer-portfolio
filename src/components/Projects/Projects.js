import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitcoinConstellation from "../../Assets/Projects/bitcoin_constellation.png";
import cryptoTracker from "../../Assets/Projects/crypto_tracker.png";
import rustVault from "../../Assets/Projects/rust_vault.png";
import cppBlockParser from "../../Assets/Projects/cpp_block_parser.png";
import bitcoinTestnetWallet from "../../Assets/Projects/bitcoin_testnet_wallet.png";
import bitcoinConnectDemo from "../../Assets/Projects/bitcoin_connect_demo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoinConstellation}
              isBlog={false}
              title="Bitcoin Constellation"
              description="A powerful HD Wallet Explorer built with Python and Streamlit. Visualizes BIP-39 mnemonic generation, BIP-32 key derivation, and BIP-84 address standards. Features a beautiful, starry-themed UI for educational exploration of Bitcoin cryptography."
              ghLink="https://github.com/Sumit-ai-dev/bitcoin-constellation"
              demoLink="https://bitcoin-constellation-yzztrcknhqqenw29wtjymd.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoTracker}
              isBlog={false}
              title="Crypto Tracker"
              description="Real-time Cryptocurrency Dashboard built with Next.js and Tailwind CSS. Features live price tracking, interactive charts, and a 'Summer of Bitcoin' branded UI. demonstrating modern frontend responsiveness and API integration."
              ghLink="https://github.com/Sumit-ai-dev/crypto-tracker"
              demoLink="https://crypto-tracker-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rustVault}
              isBlog={false}
              title="Rust-Vault"
              description="A Command-Line Bitcoin Wallet built with Rust and the Bitcoin Dev Kit (BDK). Features wallet syncing, balance checking, and address generation. Demonstrates systems programming and use of professional Bitcoin libraries."
              ghLink="https://github.com/Sumit-ai-dev/rust-vault"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cppBlockParser}
              isBlog={false}
              title="C++ Block Parser"
              description="High-performance Bitcoin Block Header Parser written in C++. Manually parses raw hex bytes of the Genesis Block to extract Version, Time, Bits, and Nonce. Demonstrates low-level memory management and understanding of Bitcoin's serialization format."
              ghLink="https://github.com/Sumit-ai-dev/cpp-block-parser"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoinTestnetWallet}
              isBlog={false}
              title="Bitcoin Testnet Wallet"
              description="A working Bitcoin Testnet Wallet built with TypeScript and React. Allows users to generate testnet addresses and sign transactions. Focuses on the practical application of Bitcoin protocol standards in a web environment."
              ghLink="https://github.com/Sumit-ai-dev/bitcoin-testnet-wallet"
              demoLink="https://bitcoin-testnet-wallet-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoinConnectDemo}
              isBlog={false}
              title="Bitcoin Connect Demo"
              description="A technical demonstration of integrating Bitcoin Connect into a modern web application. Showcases UI components for wallet connection and transaction signing flows."
              ghLink="https://github.com/Sumit-ai-dev/bitcoin-connect-demo"
              demoLink="https://bitcoin-connect-demo.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
