---
title: "Forecasting Returns in Thin Markets — Machine Learning on the Zagreb Stock Exchange"
summary: "Machine learning approach to forecasting weekly stock returns on the thin, illiquid Zagreb Stock Exchange, engineering 1,100+ features from 24 years of daily data and benchmarking Elastic Net, Random Forest, XGBoost, and a neural network."
summary_hr: "Strojno učenje za predviđanje tjednih prinosa na tankom i nelikvidnom tržištu Zagrebačke burze (ZSE), s više od 1.100 izvedenih značajki iz 24 godine dnevnih podataka te usporedbom modela Elastic Net, Random Forest, XGBoost i neuronske mreže."
date: 2025-01-01
tags:
  - "machine learning"
  - "finance"
  - "data science"
external_link: "https://lusiki.github.io/zseML/"
url_code: "https://github.com/lusiki/zseML"
---

Interactive companion site to the paper *"Forecasting Returns in Thin Markets: A Machine Learning Approach to the Zagreb Stock Exchange"* (Mislav Šagovac, Luka Šikić & Petra Palić). The project constructs over 1,100 predictors — technical indicators, time-series features, and wavelet decompositions — from 24 years (2000–2024) of daily OHLCV data, and evaluates Elastic Net, Random Forest, XGBoost, and a shallow neural network using nested rolling-window cross-validation. Directional accuracy reaches 46–53%, nonlinear models beat the linear baseline, and a striking liquidity gradient emerges: portfolio Sharpe ratios rise sharply once less-liquid stocks are included, though transaction costs constrain practical gains in the thinnest names.
