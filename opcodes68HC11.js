opcodes68HC11 = {
	"ABA": {
		macro: "ABA",
		modes: {
			INH: [0x1B, 1, 2]
		}
	},
	"ABX": {
		macro: "ABX",
		modes: {
			INH: [0x3A, 1, 3]
		}
	},
	"ABY": {
		macro: "ABY",
		modes: {
			INH: [0x183A, 2, 4]
		}
	},
	"ADCA": {
		macro: "ADCA",
		modes: {
			IMM: [0x89, 2, 2],
			DIR: [0x99, 2, 3],
			EXT: [0xB9, 3, 4],
			INDX: [0xA9, 2, 4],
			INDY: [0x18A9, 3, 5]
		}
	},
	"ADCB": {
		macro: "ADCB",
		modes: {
			IMM: [0xC9, 2, 2],
			DIR: [0xD9, 2, 3],
			EXT: [0xF9, 3, 4],
			INDX: [0xE9, 2, 4],
			INDY: [0x18E9, 3, 5]
		}
	},
	"ADDA": {
		macro: "ADDA",
		modes: {
			IMM: [0x8B, 2, 2],
			DIR: [0x9B, 2, 3],
			EXT: [0xBB, 3, 4],
			INDX: [0xAB, 2, 4],
			INDY: [0x18AB, 3, 5]
		}
	},
	"ADDB": {
		macro: "ADDB",
		modes: {
			IMM: [0xCB, 2, 2],
			DIR: [0xDB, 2, 3],
			EXT: [0xFB, 3, 4],
			INDX: [0xEB, 2, 4],
			INDY: [0x18EB, 3, 5]
		}
	},
	"ADDD": {
		macro: "ADDD",
		modes: {
			IMM: [0xC3, 3, 4],
			DIR: [0xD3, 2, 5],
			EXT: [0xF3, 3, 6],
			INDX: [0xE3, 2, 6],
			INDY: [0x18E3, 3, 7]
		}
	},
	"ANDA": {
		macro: "ANDA",
		modes: {
			IMM: [0x84, 2, 2],
			DIR: [0x94, 2, 3],
			EXT: [0xB4, 3, 4],
			INDX: [0xA4, 2, 4],
			INDY: [0x18A4, 3, 5]
		}
	},
	"ANDB": {
		macro: "ANDB",
		modes: {
			IMM: [0xC4, 2, 2],
			DIR: [0xD4, 2, 3],
			EXT: [0xF4, 3, 4],
			INDX: [0xE4, 2, 4],
			INDY: [0x18E4, 3, 5]
		}
	},
	"ASL": {
		macro: "ASL",
		modes: {
			EXT: [0x78, 3, 6],
			INDX: [0x68, 2, 6],
			INDY: [0x1868, 3, 7]
		}
	},
	"ASLA": {
		macro: "ASLA",
		modes: {
			INH: [0x48, 1, 2]
		}
	},
	"ASLB": {
		macro: "ASLB",
		modes: {
			INH: [0x58, 1, 2]
		}
	},
	"ASLD": {
		macro: "ASLD",
		modes: {
			INH: [0x5, 1, 3]
		}
	},
	"ASR": {
		macro: "ASR",
		modes: {
			EXT: [0x77, 3, 6],
			INDX: [0x67, 2, 6],
			INDY: [0x1867, 3, 7]
		}
	},
	"ASRA": {
		macro: "ASRA",
		modes: {
			INH: [0x47, 1, 2]
		}
	},
	"ASRB": {
		macro: "ASRB",
		modes: {
			INH: [0x57, 1, 2]
		}
	},
	"BCC": {
		macro: "BCC",
		modes: {
			REL: [0x24, 2, 3]
		}
	},
	"BCLR": {
		macro: "BCLR",
		modes: {
			DIR: [0x15, 3, 6],
			INDX: [0x1D, 3, 7],
			INDY: [0x181D, 4, 8]
		}
	},
	"BCS": {
		macro: "BCS",
		modes: {
			REL: [0x25, 2, 3]
		}
	},
	"BEQ": {
		macro: "BEQ",
		modes: {
			REL: [0x27, 2, 3]
		}
	},
	"BGE": {
		macro: "BGE",
		modes: {
			REL: [0x2C, 2, 3]
		}
	},
	"BGT": {
		macro: "BGT",
		modes: {
			REL: [0x2E, 2, 3]
		}
	},
	"BHI": {
		macro: "BHI",
		modes: {
			REL: [0x22, 2, 3]
		}
	},
	"BHS": {
		macro: "BHS",
		modes: {
			REL: [0x24, 2, 3]
		}
	},
	"BITA": {
		macro: "BITA",
		modes: {
			IMM: [0x85, 2, 2],
			DIR: [0x95, 2, 3],
			EXT: [0xB5, 3, 4],
			INDX: [0xA5, 2, 4],
			INDY: [0x18A5, 3, 5]
		}
	},
	"BITB": {
		macro: "BITB",
		modes: {
			IMM: [0xC5, 2, 2],
			DIR: [0xD5, 2, 3],
			EXT: [0xF5, 3, 4],
			INDX: [0xE5, 2, 4],
			INDY: [0x18E5, 3, 5]
		}
	},
	"BLE": {
		macro: "BLE",
		modes: {
			REL: [0x2F, 2, 3]
		}
	},
	"BLO": {
		macro: "BLO",
		modes: {
			REL: [0x25, 2, 3]
		}
	},
	"BLS": {
		macro: "BLS",
		modes: {
			REL: [0x23, 2, 3]
		}
	},
	"BLT": {
		macro: "BLT",
		modes: {
			REL: [0x2D, 2, 3]
		}
	},
	"BMI": {
		macro: "BMI",
		modes: {
			REL: [0x2B, 2, 3]
		}
	},
	"BNE": {
		macro: "BNE",
		modes: {
			REL: [0x26, 2, 3]
		}
	},
	"BPL": {
		macro: "BPL",
		modes: {
			REL: [0x2A, 2, 3]
		}
	},
	"BRA": {
		macro: "BRA",
		modes: {
			REL: [0x20, 2, 3]
		}
	},
	"BRCLR": {
		macro: "BRCLR",
		modes: {
			DIR: [0x13, 4, 6],
			INDX: [0x1F, 4, 7],
			INDY: [0x181F, 5, 8]
		}
	},
	"BRN": {
		macro: "BRN",
		modes: {
			REL: [0x21, 2, 3]
		}
	},
	"BRSET": {
		macro: "BRSET",
		modes: {
			DIR: [0x12, 4, 6],
			INDX: [0x1E, 4, 7],
			INDY: [0x181E, 5, 8]
		}
	},
	"BSET": {
		macro: "BSET",
		modes: {
			DIR: [0x14, 3, 6],
			INDX: [0x1C, 3, 7],
			INDY: [0x181C, 4, 8]
		}
	},
	"BSR": {
		macro: "BSR",
		modes: {
			REL: [0x8D, 2, 6]
		}
	},
	"BVC": {
		macro: "BVC",
		modes: {
			REL: [0x28, 2, 3]
		}
	},
	"BVS": {
		macro: "BVS",
		modes: {
			REL: [0x29, 2, 3]
		}
	},
	"CBA": {
		macro: "CBA",
		modes: {
			INH: [0x11, 1, 2]
		}
	},
	"CLC": {
		macro: "CLC",
		modes: {
			INH: [0x0C, 1, 2]
		}
	},
	"CLI": {
		macro: "CLI",
		modes: {
			INH: [0x0E, 1, 2]
		}
	},
	"CLR": {
		macro: "CLR",
		modes: {
			EXT: [0x7F, 3, 6],
			INDX: [0x6F, 2, 6],
			INDY: [0x186F, 3, 7]
		}
	},
	"CLRA": {
		macro: "CLRA",
		modes: {
			INH: [0x4F, 1, 2]
		}
	},
	"CLRB": {
		macro: "CLRB",
		modes: {
			INH: [0x5F, 1, 2]
		}
	},
	"CLV": {
		macro: "CLV",
		modes: {
			INH: [0x0A, 1, 2]
		}
	},
	"CMPA": {
		macro: "CMPA",
		modes: {
			IMM: [0x81, 2, 2],
			DIR: [0x91, 2, 3],
			EXT: [0xB1, 3, 4],
			INDX: [0xA1, 2, 4],
			INDY: [0x18A1, 3, 5]
		}
	},
	"CMPB": {
		macro: "CMPB",
		modes: {
			IMM: [0xC1, 2, 2],
			DIR: [0xD1, 2, 3],
			EXT: [0xF1, 3, 4],
			INDX: [0xE1, 2, 4],
			INDY: [0x18E1, 3, 5]
		}
	},
	"COM": {
		macro: "COM",
		modes: {
			EXT: [0x73, 3, 6],
			INDX: [0x63, 2, 6],
			INDY: [0x1863, 3, 7]
		}
	},
	"COMA": {
		macro: "COMA",
		modes: {
			INH: [0x43, 1, 2]
		}
	},
	"COMB": {
		macro: "COMB",
		modes: {
			INH: [0x53, 1, 2]
		}
	},
	"CPD": {
		macro: "CPD",
		modes: {
			IMM: [0x1A83, 4, 5],
			DIR: [0x1A93, 3, 6],
			EXT: [0x1AB3, 4, 7],
			INDX: [0x1AA3, 3, 7],
			INDY: [0xCDA3, 3, 7]
		}
	},
	"CPX": {
		macro: "CPX",
		modes: {
			IMM: [0x8C, 3, 4],
			DIR: [0x9C, 2, 5],
			EXT: [0xBC, 3, 6],
			INDX: [0xAC, 2, 6],
			INDY: [0xCDAC, 3, 7]
		}
	},
	"CPY": {
		macro: "CPY",
		modes: {
			IMM: [0x188C, 4, 5],
			DIR: [0x189C, 3, 6],
			EXT: [0x18BC, 4, 7],
			INDX: [0x1AAC, 3, 7],
			INDY: [0x18AC, 3, 7]
		}
	},
	"DAA": {
		macro: "DAA",
		modes: {
			INH: [0x19, 1, 2]
		}
	},
	"DEC": {
		macro: "DEC",
		modes: {
			EXT: [0x7A, 3, 6],
			INDX: [0x6A, 2, 6],
			INDY: [0x186A, 3, 7]
		}
	},
	"DECA": {
		macro: "DECA",
		modes: {
			INH: [0x4A, 1, 2]
		}
	},
	"DECB": {
		macro: "DECB",
		modes: {
			INH: [0x5A, 1, 2]
		}
	},
	"DES": {
		macro: "DES",
		modes: {
			INH: [0x34, 1, 3]
		}
	},
	"DEX": {
		macro: "DEX",
		modes: {
			INH: [0x9, 1, 3]
		}
	},
	"DEY": {
		macro: "DEY",
		modes: {
			INH: [0x189, 2, 4]
		}
	},
	"EORA": {
		macro: "EORA",
		modes: {
			IMM: [0x88, 2, 2],
			DIR: [0x98, 2, 3],
			EXT: [0xB8, 3, 4],
			INDX: [0xA8, 2, 4],
			INDY: [0x18A8, 3, 5]
		}
	},
	"EORB": {
		macro: "EORB",
		modes: {
			IMM: [0xC8, 2, 2],
			DIR: [0xD8, 2, 3],
			EXT: [0xF8, 3, 4],
			INDX: [0xE8, 2, 4],
			INDY: [0x18E8, 3, 5]
		}
	},
	"FDIV": {
		macro: "FDIV",
		modes: {
			INH: [0x3, 1, 41]
		}
	},
	"IDIV": {
		macro: "IDIV",
		modes: {
			INH: [0x2, 1, 41]
		}
	},
	"INC": {
		macro: "INC",
		modes: {
			EXT: [0x7C, 3, 6],
			INDX: [0x6C, 2, 6],
			INDY: [0x186C, 3, 7]
		}
	},
	"INCA": {
		macro: "INCA",
		modes: {
			INH: [0x4C, 1, 2]
		}
	},
	"INCB": {
		macro: "INCB",
		modes: {
			INH: [0x5C, 1, 2]
		}
	},
	"INS": {
		macro: "INS",
		modes: {
			INH: [0x31, 1, 3]
		}
	},
	"INX": {
		macro: "INX",
		modes: {
			INH: [0x8, 1, 3]
		}
	},
	"INY": {
		macro: "INY",
		modes: {
			INH: [0x188, 2, 4]
		}
	},
	"JMP": {
		macro: "JMP",
		modes: {
			EXT: [0x7E, 3, 3],
			INDX: [0x6E, 2, 3],
			INDY: [0x186E, 3, 4]
		}
	},
	"JSR": {
		macro: "JSR",
		modes: {
			DIR: [0x9D, 2, 5],
			EXT: [0xBD, 3, 6],
			INDX: [0xAD, 2, 6],
			INDY: [0x18AD, 3, 7]
		}
	},
	"LDAA": {
		macro: "LDAA",
		modes: {
			IMM: [0x86, 2, 2],
			DIR: [0x96, 2, 3],
			EXT: [0xB6, 3, 4],
			INDX: [0xA6, 2, 4],
			INDY: [0x18A6, 3, 5]
		}
	},
	"LDAB": {
		macro: "LDAB",
		modes: {
			IMM: [0xC6, 2, 2],
			DIR: [0xD6, 2, 3],
			EXT: [0xF6, 3, 4],
			INDX: [0xE6, 2, 4],
			INDY: [0x18E6, 3, 5]
		}
	},
	"LDD": {
		macro: "LDD",
		modes: {
			IMM: [0xCC, 3, 3],
			DIR: [0xDC, 2, 4],
			EXT: [0xFC, 3, 5],
			INDX: [0xEC, 2, 5],
			INDY: [0x18EC, 3, 6]
		}
	},
	"LDS": {
		macro: "LDS",
		modes: {
			IMM: [0x8E, 3, 3],
			DIR: [0x9E, 2, 4],
			EXT: [0xBE, 3, 5],
			INDX: [0xAE, 2, 5],
			INDY: [0x18AE, 3, 6]
		}
	},
	"LDX": {
		macro: "LDX",
		modes: {
			IMM: [0xCE, 3, 3],
			DIR: [0xDE, 2, 4],
			EXT: [0xFE, 3, 5],
			INDX: [0xEE, 2, 5],
			INDY: [0xCDEE, 3, 6]
		}
	},
	"LDY": {
		macro: "LDY",
		modes: {
			IMM: [0x18CE, 4, 4],
			DIR: [0x18DE, 3, 5],
			EXT: [0x18FE, 4, 6],
			INDX: [0x1AEE, 3, 6],
			INDY: [0x18EE, 3, 6]
		}
	},
	"LSL": {
		macro: "LSL",
		modes: {
			EXT: [0x78, 3, 6],
			INDX: [0x68, 2, 6],
			INDY: [0x1868, 3, 7]
		}
	},
	"LSLA": {
		macro: "LSLA",
		modes: {
			INH: [0x48, 1, 2]
		}
	},
	"LSLB": {
		macro: "LSLB",
		modes: {
			INH: [0x58, 1, 2]
		}
	},
	"LSLD": {
		macro: "LSLD",
		modes: {
			INH: [0x5, 1, 3]
		}
	},
	"LSR": {
		macro: "LSR",
		modes: {
			EXT: [0x74, 3, 6],
			INDX: [0x64, 2, 6],
			INDY: [0x1864, 3, 7]
		}
	},
	"LSRA": {
		macro: "LSRA",
		modes: {
			INH: [0x44, 1, 2]
		}
	},
	"LSRB": {
		macro: "LSRB",
		modes: {
			INH: [0x54, 1, 2]
		}
	},
	"LSRD": {
		macro: "LSRD",
		modes: {
			INH: [0x4, 1, 3]
		}
	},
	"MUL": {
		macro: "MUL",
		modes: {
			INH: [0x3D, 1, 10]
		}
	},
	"NEG": {
		macro: "NEG",
		modes: {
			EXT: [0x70, 3, 6],
			INDX: [0x60, 2, 6],
			INDY: [0x1860, 3, 7]
		}
	},
	"NEGA": {
		macro: "NEGA",
		modes: {
			INH: [0x40, 1, 2]
		}
	},
	"NEGB": {
		macro: "NEGB",
		modes: {
			INH: [0x50, 1, 2]
		}
	},
	"NOP": {
		macro: "NOP",
		modes: {
			INH: [0x1, 1, 2]
		}
	},
	"ORAA": {
		macro: "ORAA",
		modes: {
			IMM: [0x8A, 2, 2],
			DIR: [0x9A, 2, 3],
			EXT: [0xBA, 3, 4],
			INDX: [0xAA, 2, 4],
			INDY: [0x18AA, 3, 5]
		}
	},
	"ORAB": {
		macro: "ORAB",
		modes: {
			IMM: [0xCA, 2, 2],
			DIR: [0xDA, 2, 3],
			EXT: [0xFA, 3, 4],
			INDX: [0xEA, 2, 4],
			INDY: [0x18EA, 3, 5]
		}
	},
	"PSHA": {
		macro: "PSHA",
		modes: {
			INH: [0x36, 1, 3]
		}
	},
	"PSHB": {
		macro: "PSHB",
		modes: {
			INH: [0x37, 1, 3]
		}
	},
	"PSHX": {
		macro: "PSHX",
		modes: {
			INH: [0x3C, 1, 4]
		}
	},
	"PSHY": {
		macro: "PSHY",
		modes: {
			INH: [0x183C, 2, 5]
		}
	},
	"PULA": {
		macro: "PULA",
		modes: {
			INH: [0x32, 1, 4]
		}
	},
	"PULB": {
		macro: "PULB",
		modes: {
			INH: [0x33, 1, 4]
		}
	},
	"PULX": {
		macro: "PULX",
		modes: {
			INH: [0x38, 1, 5]
		}
	},
	"PULY": {
		macro: "PULY",
		modes: {
			INH: [0x1838, 2, 6]
		}
	},
	"ROL": {
		macro: "ROL",
		modes: {
			EXT: [0x79, 3, 6],
			INDX: [0x69, 2, 6],
			INDY: [0x1869, 3, 7]
		}
	},
	"ROLA": {
		macro: "ROLA",
		modes: {
			INH: [0x49, 1, 2]
		}
	},
	"ROLB": {
		macro: "ROLB",
		modes: {
			INH: [0x59, 1, 2]
		}
	},
	"ROR": {
		macro: "ROR",
		modes: {
			EXT: [0x76, 3, 6],
			INDX: [0x66, 2, 6],
			INDY: [0x1866, 3, 7]
		}
	},
	"RORA": {
		macro: "RORA",
		modes: {
			INH: [0x46, 1, 2]
		}
	},
	"RORB": {
		macro: "RORB",
		modes: {
			INH: [0x56, 1, 2]
		}
	},
	"RTI": {
		macro: "RTI",
		modes: {
			INH: [0x3B, 1, 12]
		}
	},
	"RTS": {
		macro: "RTS",
		modes: {
			INH: [0x39, 1, 5]
		}
	},
	"SBA": {
		macro: "SBA",
		modes: {
			INH: [0x10, 1, 2]
		}
	},
	"SBCA": {
		macro: "SBCA",
		modes: {
			IMM: [0x82, 2, 2],
			DIR: [0x92, 2, 3],
			EXT: [0xB2, 3, 4],
			INDX: [0xA2, 2, 4],
			INDY: [0x18A2, 3, 5]
		}
	},
	"SBCB": {
		macro: "SBCB",
		modes: {
			IMM: [0xC2, 2, 2],
			DIR: [0xD2, 2, 3],
			EXT: [0xF2, 3, 4],
			INDX: [0xE2, 2, 4],
			INDY: [0x18E2, 3, 5]
		}
	},
	"SEC": {
		macro: "SEC",
		modes: {
			INH: [0x0D, 1, 2]
		}
	},
	"SEI": {
		macro: "SEI",
		modes: {
			INH: [0x0F, 1, 2]
		}
	},
	"SEV": {
		macro: "SEV",
		modes: {
			INH: [0x0B, 1, 2]
		}
	},
	"STAA": {
		macro: "STAA",
		modes: {
			DIR: [0x97, 2, 3],
			EXT: [0xB7, 3, 4],
			INDX: [0xA7, 2, 4],
			INDY: [0x18A7, 3, 5]
		}
	},
	"STAB": {
		macro: "STAB",
		modes: {
			DIR: [0xD7, 2, 3],
			EXT: [0xF7, 3, 4],
			INDX: [0xE7, 2, 4],
			INDY: [0x18E7, 3, 5]
		}
	},
	"STD": {
		macro: "STD",
		modes: {
			DIR: [0xDD, 2, 4],
			EXT: [0xFD, 3, 5],
			INDX: [0xED, 2, 5],
			INDY: [0x18ED, 3, 6]
		}
	},
	"STOP": {
		macro: "STOP",
		modes: {
			INH: [0xCF, 1, 2]
		}
	},
	"STS": {
		macro: "STS",
		modes: {
			DIR: [0x9F, 2, 4],
			EXT: [0xBF, 3, 5],
			INDX: [0xAF, 2, 5],
			INDY: [0x18AF, 3, 6]
		}
	},
	"STX": {
		macro: "STX",
		modes: {
			DIR: [0xDF, 2, 4],
			EXT: [0xFF, 3, 5],
			INDX: [0xEF, 2, 5],
			INDY: [0xCDEF, 3, 6]
		}
	},
	"STY": {
		macro: "STY",
		modes: {
			DIR: [0x18DF, 3, 5],
			EXT: [0x18FF, 4, 6],
			INDX: [0x1AEF, 3, 6],
			INDY: [0x18EF, 3, 6]
		}
	},
	"SUBA": {
		macro: "SUBA",
		modes: {
			IMM: [0x80, 2, 2],
			DIR: [0x90, 2, 3],
			EXT: [0xB0, 3, 4],
			INDX: [0xA0, 2, 4],
			INDY: [0x18A0, 3, 5]
		}
	},
	"SUBB": {
		macro: "SUBB",
		modes: {
			IMM: [0xC0, 2, 2],
			DIR: [0xD0, 2, 3],
			EXT: [0xF0, 3, 4],
			INDX: [0xE0, 2, 4],
			INDY: [0x18E0, 3, 5]
		}
	},
	"SUBD": {
		macro: "SUBD",
		modes: {
			IMM: [0x83, 3, 4],
			DIR: [0x93, 2, 5],
			EXT: [0xB3, 3, 6],
			INDX: [0xA3, 2, 6],
			INDY: [0x18A3, 3, 7]
		}
	},
	"SWI": {
		macro: "SWI",
		modes: {
			INH: [0x3F, 1, 14]
		}
	},
	"TAB": {
		macro: "TAB",
		modes: {
			INH: [0x16, 1, 2]
		}
	},
	"TAP": {
		macro: "TAP",
		modes: {
			INH: [0x6, 1, 2]
		}
	},
	"TBA": {
		macro: "TBA",
		modes: {
			INH: [0x17, 1, 2]
		}
	},
	"TEST": {
		macro: "TEST",
		modes: {
			INH: [0x0, 1, *]
		}
	},
	"TPA": {
		macro: "TPA",
		modes: {
			INH: [0x7, 1, 2]
		}
	},
	"TST": {
		macro: "TST",
		modes: {
			EXT: [0x7D, 3, 6],
			INDX: [0x6D, 2, 6],
			INDY: [0x186D, 3, 7]
		}
	},
	"TSTA": {
		macro: "TSTA",
		modes: {
			INH: [0x4D, 1, 2]
		}
	},
	"TSTB": {
		macro: "TSTB",
		modes: {
			INH: [0x5D, 1, 2]
		}
	},
	"TSX": {
		macro: "TSX",
		modes: {
			INH: [0x30, 1, 3]
		}
	},
	"TSY": {
		macro: "TSY",
		modes: {
			INH: [0x1830, 2, 4]
		}
	},
	"TXS": {
		macro: "TXS",
		modes: {
			INH: [0x35, 1, 3]
		}
	},
	"TYS": {
		macro: "TYS",
		modes: {
			INH: [0x1835, 2, 4]
		}
	},
	"WAI": {
		macro: "WAI",
		modes: {
			INH: [0x3E, 1, **]
		}
	},
	"XGDX": {
		macro: "XGDX",
		modes: {
			INH: [0x8F, 1, 3]
		}
	},
	"XGDY": {
		macro: "XGDY",
		modes: {
			INH: [0x188F, 2, 4]
		}
	},
}
