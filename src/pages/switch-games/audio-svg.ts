export const audioSVG = (color: string): string => `
<?xml version="1.0" standalone="no"?>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" fill=${color}
viewBox="0 0 1280.000000 1064.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1064.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M6120 10634 c-25 -2 -108 -8 -185 -14 -683 -53 -1419 -249 -2154
-571 -162 -71 -534 -255 -665 -329 -235 -132 -434 -281 -639 -480 -266 -257
-478 -542 -627 -841 -111 -225 -174 -408 -222 -649 l-23 -115 -3 -3592 -2
-3593 420 0 420 0 0 3529 c0 3135 2 3538 15 3610 92 483 542 1063 1119 1442
192 127 333 193 720 339 1282 481 2244 557 3381 265 425 -109 1073 -341 1346
-481 183 -94 422 -266 599 -429 389 -359 657 -779 725 -1136 13 -72 15 -475
15 -3610 l0 -3529 420 0 420 0 -2 3593 -3 3592 -23 115 c-48 241 -111 424
-222 649 -227 457 -623 902 -1066 1199 -126 84 -273 166 -529 292 -836 412
-1607 642 -2427 725 -143 15 -704 28 -808 19z"/>
<path d="M2712 6148 c-73 -28 -153 -109 -181 -183 l-21 -56 2 -2837 3 -2837
27 -50 c35 -68 92 -122 158 -154 l55 -26 315 0 315 0 55 26 c66 32 123 86 158
154 l27 50 6 1445 c4 1003 9 1469 17 1525 22 156 20 151 50 153 46 3 54 -10
63 -104 11 -119 29 -630 29 -832 l0 -162 34 0 c19 0 37 3 40 8 11 19 36 170
46 278 6 65 14 226 19 357 5 153 12 242 20 250 8 8 11 2 11 -24 0 -36 18 -79
21 -49 3 29 18 -75 18 -128 1 -33 5 -51 11 -47 5 3 10 31 10 61 0 32 4 53 9
49 13 -7 21 53 29 210 l7 130 78 1 c51 1 80 -2 82 -10 1 -6 8 -47 13 -91 19
-142 51 -251 53 -179 2 60 16 -17 23 -126 14 -221 38 -455 47 -465 5 -5 9 -1
9 12 0 27 20 83 30 83 4 0 11 -11 14 -25 7 -26 26 -35 26 -12 0 6 4 50 9 97 5
47 12 123 16 170 6 96 42 445 51 503 3 20 11 37 19 37 17 0 25 -55 25 -190 0
-110 12 -301 26 -403 7 -55 22 -57 40 -6 10 30 12 31 15 11 6 -32 23 -32 27 1
4 30 18 36 24 10 6 -25 16 77 24 230 8 167 22 168 39 2 8 -70 24 -172 32 -199
13 -46 24 22 34 221 12 236 16 276 30 268 5 -4 9 5 9 19 0 15 8 30 19 36 23
12 91 13 109 1 7 -4 18 -40 24 -80 11 -68 28 -97 28 -47 0 40 12 86 21 80 5
-3 9 -24 10 -47 0 -31 3 -37 8 -22 5 12 12 -28 20 -110 19 -204 31 -292 57
-402 13 -55 27 -127 30 -158 4 -31 10 -52 14 -48 5 4 13 78 20 163 16 219 27
292 46 334 15 30 34 48 34 32 0 -3 5 -38 10 -78 6 -40 17 -142 25 -227 8 -84
16 -156 19 -158 9 -9 15 36 41 297 29 290 32 310 45 290 13 -22 19 -10 25 56
11 111 15 124 34 124 17 0 20 -12 25 -117 4 -65 11 -196 16 -290 6 -95 10
-187 10 -204 0 -52 17 -23 25 43 l8 63 10 -45 c9 -42 10 -44 19 -20 5 14 14
115 19 225 6 110 12 232 15 272 6 72 6 72 38 79 18 3 68 4 111 2 78 -3 79 -3
87 -33 4 -16 14 -35 22 -41 16 -11 29 -75 47 -236 11 -101 19 -123 34 -98 10
17 25 1 25 -28 0 -42 11 -72 26 -72 12 0 23 -29 39 -108 5 -26 10 -31 20 -22
7 6 16 23 20 37 8 35 45 83 45 59 0 -24 17 -19 24 7 10 38 26 -1 26 -67 0 -37
4 -56 9 -50 9 8 31 436 31 586 0 51 2 58 20 58 15 0 20 -7 21 -27 2 -102 28
-316 40 -327 5 -6 9 3 9 25 0 88 29 154 31 72 1 -21 4 -49 8 -63 7 -23 8 -21
14 15 3 22 9 101 13 177 l6 136 89 0 c49 0 91 -4 94 -8 3 -5 12 -7 19 -4 13 5
17 -30 32 -316 7 -126 9 -136 28 -121 19 16 26 -6 33 -96 3 -40 9 -70 13 -68
4 2 13 60 19 127 7 68 19 132 26 143 7 11 18 58 24 105 12 88 26 121 35 79 11
-54 16 -103 31 -291 8 -108 22 -229 30 -269 9 -40 18 -142 22 -226 3 -84 10
-153 15 -153 4 0 8 6 8 13 0 33 20 339 26 389 4 40 10 55 18 52 16 -6 22 44
36 295 5 96 11 176 13 178 2 1 9 -59 15 -135 6 -75 18 -162 27 -192 8 -30 15
-69 15 -87 0 -51 18 -48 24 4 3 27 8 129 11 228 5 122 11 190 21 211 7 18 17
56 22 85 l7 54 112 0 c61 0 115 -4 120 -8 4 -5 10 -44 12 -88 1 -43 7 -79 12
-79 5 0 9 8 9 17 0 11 3 14 10 7 11 -11 24 -163 39 -464 10 -184 16 -230 31
-230 13 0 20 45 35 223 14 179 54 539 59 544 2 2 5 -41 8 -96 3 -58 10 -107
17 -115 15 -18 40 -298 42 -471 0 -66 4 -131 8 -145 7 -24 8 -23 14 10 3 19
11 82 17 140 7 58 13 106 15 108 2 2 7 -12 10 -32 4 -20 11 -36 15 -36 13 0
18 49 32 269 12 202 21 245 39 178 4 -15 15 -93 24 -174 20 -172 23 -185 35
-162 25 44 55 243 78 519 l7 85 109 3 c60 1 113 -1 118 -6 4 -4 17 -120 29
-258 42 -524 52 -572 75 -364 8 82 19 105 28 62 8 -32 52 -70 66 -55 5 4 15
42 23 83 l15 75 2 -70 c2 -125 16 -263 25 -254 2 2 8 49 15 104 16 132 26 146
34 49 4 -43 10 -99 13 -124 6 -44 6 -44 15 -15 4 17 13 164 20 328 6 163 15
297 19 297 4 0 10 -42 13 -92 14 -203 30 -354 38 -378 l10 -25 12 25 c23 44
44 159 66 355 30 272 25 252 61 259 40 8 157 8 196 0 l30 -6 7 -166 c4 -92 11
-223 17 -292 9 -107 13 -128 31 -143 21 -17 22 -17 40 0 20 21 30 72 50 258
11 104 14 -68 18 -1320 l5 -1440 28 -56 c32 -66 99 -132 165 -162 45 -21 60
-22 367 -22 314 0 321 0 366 23 75 37 125 87 161 160 l33 67 0 2830 0 2830
-29 63 c-36 78 -105 143 -183 172 -54 20 -72 21 -367 18 l-311 -3 -50 -27
c-65 -34 -128 -100 -157 -163 l-23 -50 -5 -1230 c-3 -676 -9 -1219 -13 -1205
-4 14 -12 93 -17 175 -10 158 -18 215 -30 215 -9 0 -30 -134 -30 -190 0 -45
-10 -51 -25 -17 -6 12 -17 21 -26 19 -29 -4 -38 22 -49 153 -6 72 -15 153 -20
180 -5 28 -14 106 -20 175 -19 229 -21 245 -27 279 -8 48 -19 21 -27 -69 -16
-179 -67 -645 -71 -649 -3 -2 -5 8 -5 22 0 39 -17 33 -24 -8 -4 -20 -13 -35
-21 -35 -9 0 -16 -16 -19 -42 -5 -35 -26 -303 -26 -330 0 -5 -24 -8 -53 -8
l-54 0 -11 123 c-15 148 -54 397 -63 397 -8 0 -15 -73 -30 -317 l-12 -203 -42
0 -41 0 -17 98 c-9 53 -21 147 -27 207 -6 61 -15 114 -19 118 -4 4 -13 -27
-19 -70 -16 -110 -30 -156 -47 -149 -19 7 -24 -14 -32 -115 -5 -78 -8 -89 -24
-89 -16 0 -19 8 -19 48 0 92 -13 241 -21 237 -9 -6 -16 71 -24 255 -6 130 -39
525 -51 603 -8 49 -25 43 -41 -13 -18 -63 -61 -420 -73 -610 -6 -91 -15 -199
-20 -240 -5 -41 -9 -111 -10 -155 -1 -125 -1 -125 -76 -125 -60 0 -64 2 -64
23 0 12 -5 29 -10 37 -7 11 -10 5 -10 -22 0 -21 -4 -38 -9 -38 -10 0 -21 48
-21 91 0 30 -14 39 -23 15 -3 -7 -9 -34 -12 -60 l-7 -46 -58 0 c-68 0 -70 2
-70 103 -1 142 -28 363 -50 406 -21 43 -26 46 -49 32 -13 -8 -28 -172 -30
-328 -1 -47 -16 -59 -19 -15 -4 57 -22 418 -22 445 0 15 -4 27 -9 27 -5 0 -11
-69 -15 -152 -11 -256 -17 -268 -37 -75 -16 144 -21 171 -38 185 -15 12 -24
38 -31 92 -6 41 -17 104 -25 140 -8 36 -20 100 -26 143 -6 42 -15 77 -18 77
-4 0 -15 -107 -25 -237 -20 -280 -64 -788 -72 -821 -4 -21 -9 -23 -67 -20 -58
3 -62 5 -65 28 -6 41 -19 44 -26 5 l-7 -36 -67 3 -67 3 -6 120 c-10 195 -30
428 -39 460 l-8 30 -1 -31 c-1 -17 -4 -46 -8 -65 -5 -28 -7 -30 -14 -14 -4 11
-8 41 -8 67 -1 26 -5 49 -10 52 -11 7 -21 -94 -21 -219 0 -137 -11 -288 -21
-278 -4 4 -15 97 -23 205 -9 109 -17 203 -17 210 -4 35 -18 -93 -25 -217 l-8
-140 -12 175 c-6 96 -15 228 -19 294 -4 74 -10 114 -16 105 -5 -8 -9 -24 -9
-37 0 -12 -9 -31 -20 -42 -11 -11 -23 -34 -27 -51 -4 -20 -14 -34 -29 -40 -13
-4 -24 -14 -24 -21 0 -17 -28 -277 -36 -346 -11 -86 -25 -78 -39 21 -3 26 -10
47 -14 47 -4 0 -14 -52 -21 -115 -7 -63 -16 -117 -20 -120 -4 -2 -15 51 -24
118 -10 67 -21 125 -25 130 -4 4 -17 -6 -28 -21 -21 -28 -53 -179 -53 -249 l0
-33 -74 0 -74 0 -7 88 c-4 48 -10 107 -14 132 l-8 45 -8 -55 c-7 -46 -10 -51
-15 -29 -4 14 -11 65 -15 112 -4 48 -11 89 -15 92 -5 3 -11 -18 -14 -47 -8
-81 -26 -294 -26 -312 0 -9 -4 -16 -8 -16 -8 0 -32 270 -32 363 0 95 -18 35
-25 -83 -4 -66 -11 -118 -15 -115 -4 3 -11 39 -15 80 -7 80 -19 96 -29 40 -10
-50 -22 -51 -34 -2 -33 126 -52 214 -52 236 0 14 -4 33 -9 40 -8 12 -11 10
-14 -10 -12 -60 -41 -264 -51 -364 -7 -63 -20 -128 -31 -152 -17 -39 -22 -43
-55 -43 l-36 0 -12 123 c-7 67 -12 148 -12 179 0 61 -47 448 -55 456 -3 3 -7
3 -9 1 -2 -2 -14 -137 -26 -299 -12 -162 -25 -331 -28 -375 l-7 -80 -36 -3
c-46 -4 -49 4 -49 168 0 159 -17 447 -29 499 -5 22 -16 47 -25 56 -9 9 -16 33
-17 53 0 20 -4 46 -8 57 -12 30 -20 -65 -32 -355 -10 -254 -20 -359 -32 -330
-9 24 -26 220 -20 236 3 8 1 14 -5 14 -10 0 -14 -44 -28 -254 -11 -168 -21
-161 -28 19 -6 152 -39 514 -53 588 -7 33 -23 18 -23 -22 0 -19 -3 -21 -14
-12 -16 14 -18 7 -41 -183 -8 -65 -16 -121 -18 -123 -3 -2 -8 22 -11 54 -4 32
-10 67 -14 78 -8 27 -20 -56 -21 -155 -1 -41 -8 -120 -16 -175 -8 -55 -17
-126 -21 -157 l-5 -58 -64 0 -63 0 -6 68 c-3 37 -8 121 -11 187 -6 114 -28
250 -45 269 -5 4 -11 -18 -15 -50 -4 -33 -11 -77 -17 -99 -29 -123 -34 -140
-43 -140 -5 0 -12 13 -15 29 -3 17 -9 29 -15 28 -6 -1 -12 48 -16 123 -4 69
-9 128 -12 131 -3 3 -9 -15 -12 -41 -4 -25 -9 -44 -11 -43 -2 2 -8 55 -14 118
-17 197 -33 320 -42 320 -4 0 -8 -33 -8 -72 0 -91 -18 -353 -26 -392 -10 -47
-22 -11 -30 93 -11 146 -20 87 -33 -209 -13 -287 -17 -320 -36 -320 -10 0 -15
32 -19 118 -12 213 -44 486 -75 624 -6 24 -15 104 -21 178 -11 140 -18 185
-25 178 -11 -11 -65 -500 -75 -683 -7 -110 -17 -209 -22 -219 -6 -11 -13 -59
-16 -108 l-5 -88 -132 0 -132 0 -6 29 c-9 43 -37 297 -41 371 -2 36 -8 133
-15 215 -6 83 -16 244 -22 360 -7 115 -15 200 -19 190 -4 -11 -13 -150 -20
-310 -24 -559 -27 -491 -29 597 -1 1089 -1 1098 -22 1153 -28 76 -108 156
-184 184 -52 20 -75 21 -358 20 -280 0 -306 -2 -355 -21z"/>
<path d="M1426 5666 c-465 -293 -852 -719 -1105 -1219 -311 -616 -399 -1347
-245 -2034 54 -240 122 -431 244 -678 247 -503 643 -940 1118 -1234 l82 -51 0
2635 c0 1449 -2 2635 -3 2635 -2 0 -43 -24 -91 -54z"/>
<path d="M11280 3085 l0 -2635 83 51 c917 569 1471 1602 1434 2679 -27 769
-323 1472 -852 2018 -189 195 -438 396 -615 495 l-50 28 0 -2636z"/>
</g>
</svg>`;
