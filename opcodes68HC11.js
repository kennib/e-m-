opcodes68HC11 = {
	"ABA": {
		macro: "ABA",
		modes: {
			INH: [0x1B, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": null,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ABX": {
		macro: "ABX",
		modes: {
			INH: [0x3A, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"ABY": {
		macro: "ABY",
		modes: {
			INH: [0x183A, 2, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": null,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": null,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": null,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": null,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"ASL": {
		macro: "ASL",
		modes: {
			EXT: [0x78, 3, 6],
			INDX: [0x68, 2, 6],
			INDY: [0x1868, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ASLA": {
		macro: "ASLA",
		modes: {
			INH: [0x48, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ASLB": {
		macro: "ASLB",
		modes: {
			INH: [0x58, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ASLD": {
		macro: "ASLD",
		modes: {
			INH: [0x5, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ASR": {
		macro: "ASR",
		modes: {
			EXT: [0x77, 3, 6],
			INDX: [0x67, 2, 6],
			INDY: [0x1867, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ASRA": {
		macro: "ASRA",
		modes: {
			INH: [0x47, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ASRB": {
		macro: "ASRB",
		modes: {
			INH: [0x57, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"BCC": {
		macro: "BCC",
		modes: {
			REL: [0x24, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BCLR": {
		macro: "BCLR",
		modes: {
			DIR: [0x15, 3, 6],
			INDX: [0x1D, 3, 7],
			INDY: [0x181D, 4, 8]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"BCS": {
		macro: "BCS",
		modes: {
			REL: [0x25, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BEQ": {
		macro: "BEQ",
		modes: {
			REL: [0x27, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BGE": {
		macro: "BGE",
		modes: {
			REL: [0x2C, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BGT": {
		macro: "BGT",
		modes: {
			REL: [0x2E, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BHI": {
		macro: "BHI",
		modes: {
			REL: [0x22, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BHS": {
		macro: "BHS",
		modes: {
			REL: [0x24, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"BLE": {
		macro: "BLE",
		modes: {
			REL: [0x2F, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BLO": {
		macro: "BLO",
		modes: {
			REL: [0x25, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BLS": {
		macro: "BLS",
		modes: {
			REL: [0x23, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BLT": {
		macro: "BLT",
		modes: {
			REL: [0x2D, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BMI": {
		macro: "BMI",
		modes: {
			REL: [0x2B, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BNE": {
		macro: "BNE",
		modes: {
			REL: [0x26, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BPL": {
		macro: "BPL",
		modes: {
			REL: [0x2A, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BRA": {
		macro: "BRA",
		modes: {
			REL: [0x20, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BRCLR": {
		macro: "BRCLR",
		modes: {
			DIR: [0x13, 4, 6],
			INDX: [0x1F, 4, 7],
			INDY: [0x181F, 5, 8]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BRN": {
		macro: "BRN",
		modes: {
			REL: [0x21, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BRSET": {
		macro: "BRSET",
		modes: {
			DIR: [0x12, 4, 6],
			INDX: [0x1E, 4, 7],
			INDY: [0x181E, 5, 8]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BSET": {
		macro: "BSET",
		modes: {
			DIR: [0x14, 3, 6],
			INDX: [0x1C, 3, 7],
			INDY: [0x181C, 4, 8]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"BSR": {
		macro: "BSR",
		modes: {
			REL: [0x8D, 2, 6]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BVC": {
		macro: "BVC",
		modes: {
			REL: [0x28, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"BVS": {
		macro: "BVS",
		modes: {
			REL: [0x29, 2, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"CBA": {
		macro: "CBA",
		modes: {
			INH: [0x11, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"CLC": {
		macro: "CLC",
		modes: {
			INH: [0x0C, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": 0
		}
	},
	"CLI": {
		macro: "CLI",
		modes: {
			INH: [0x0E, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": 0,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"CLR": {
		macro: "CLR",
		modes: {
			EXT: [0x7F, 3, 6],
			INDX: [0x6F, 2, 6],
			INDY: [0x186F, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": 1,
			"V": 0,
			"C": 0
		}
	},
	"CLRA": {
		macro: "CLRA",
		modes: {
			INH: [0x4F, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": 1,
			"V": 0,
			"C": 0
		}
	},
	"CLRB": {
		macro: "CLRB",
		modes: {
			INH: [0x5F, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": 1,
			"V": 0,
			"C": 0
		}
	},
	"CLV": {
		macro: "CLV",
		modes: {
			INH: [0x0A, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"COM": {
		macro: "COM",
		modes: {
			EXT: [0x73, 3, 6],
			INDX: [0x63, 2, 6],
			INDY: [0x1863, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": 1
		}
	},
	"COMA": {
		macro: "COMA",
		modes: {
			INH: [0x43, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": 1
		}
	},
	"COMB": {
		macro: "COMB",
		modes: {
			INH: [0x53, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": 1
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"DAA": {
		macro: "DAA",
		modes: {
			INH: [0x19, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"DEC": {
		macro: "DEC",
		modes: {
			EXT: [0x7A, 3, 6],
			INDX: [0x6A, 2, 6],
			INDY: [0x186A, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": undefined
		}
	},
	"DECA": {
		macro: "DECA",
		modes: {
			INH: [0x4A, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": undefined
		}
	},
	"DECB": {
		macro: "DECB",
		modes: {
			INH: [0x5A, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": undefined
		}
	},
	"DES": {
		macro: "DES",
		modes: {
			INH: [0x34, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"DEX": {
		macro: "DEX",
		modes: {
			INH: [0x9, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": null,
			"V": undefined,
			"C": undefined
		}
	},
	"DEY": {
		macro: "DEY",
		modes: {
			INH: [0x189, 2, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": null,
			"V": undefined,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"FDIV": {
		macro: "FDIV",
		modes: {
			INH: [0x3, 1, 41]
		},
		conditions: {
			"S": 1,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": null,
			"C": null
		}
	},
	"IDIV": {
		macro: "IDIV",
		modes: {
			INH: [0x2, 1, 41]
		},
		conditions: {
			"S": 1,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": null,
			"C": 0
		}
	},
	"INC": {
		macro: "INC",
		modes: {
			EXT: [0x7C, 3, 6],
			INDX: [0x6C, 2, 6],
			INDY: [0x186C, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": undefined
		}
	},
	"INCA": {
		macro: "INCA",
		modes: {
			INH: [0x4C, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": undefined
		}
	},
	"INCB": {
		macro: "INCB",
		modes: {
			INH: [0x5C, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": undefined
		}
	},
	"INS": {
		macro: "INS",
		modes: {
			INH: [0x31, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"INX": {
		macro: "INX",
		modes: {
			INH: [0x8, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": null,
			"V": undefined,
			"C": undefined
		}
	},
	"INY": {
		macro: "INY",
		modes: {
			INH: [0x188, 2, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": null,
			"V": undefined,
			"C": undefined
		}
	},
	"JMP": {
		macro: "JMP",
		modes: {
			EXT: [0x7E, 3, 3],
			INDX: [0x6E, 2, 3],
			INDY: [0x186E, 3, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"JSR": {
		macro: "JSR",
		modes: {
			DIR: [0x9D, 2, 5],
			EXT: [0xBD, 3, 6],
			INDX: [0xAD, 2, 6],
			INDY: [0x18AD, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"LSL": {
		macro: "LSL",
		modes: {
			EXT: [0x78, 3, 6],
			INDX: [0x68, 2, 6],
			INDY: [0x1868, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSLA": {
		macro: "LSLA",
		modes: {
			INH: [0x48, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSLB": {
		macro: "LSLB",
		modes: {
			INH: [0x58, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSLD": {
		macro: "LSLD",
		modes: {
			INH: [0x5, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSR": {
		macro: "LSR",
		modes: {
			EXT: [0x74, 3, 6],
			INDX: [0x64, 2, 6],
			INDY: [0x1864, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSRA": {
		macro: "LSRA",
		modes: {
			INH: [0x44, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSRB": {
		macro: "LSRB",
		modes: {
			INH: [0x54, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"LSRD": {
		macro: "LSRD",
		modes: {
			INH: [0x4, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": 0,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"MUL": {
		macro: "MUL",
		modes: {
			INH: [0x3D, 1, 10]
		},
		conditions: {
			"S": undefined,
			"X": 1,
			"H": 0,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"NEG": {
		macro: "NEG",
		modes: {
			EXT: [0x70, 3, 6],
			INDX: [0x60, 2, 6],
			INDY: [0x1860, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"NEGA": {
		macro: "NEGA",
		modes: {
			INH: [0x40, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"NEGB": {
		macro: "NEGB",
		modes: {
			INH: [0x50, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"NOP": {
		macro: "NOP",
		modes: {
			INH: [0x1, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"PSHA": {
		macro: "PSHA",
		modes: {
			INH: [0x36, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PSHB": {
		macro: "PSHB",
		modes: {
			INH: [0x37, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PSHX": {
		macro: "PSHX",
		modes: {
			INH: [0x3C, 1, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PSHY": {
		macro: "PSHY",
		modes: {
			INH: [0x183C, 2, 5]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PULA": {
		macro: "PULA",
		modes: {
			INH: [0x32, 1, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PULB": {
		macro: "PULB",
		modes: {
			INH: [0x33, 1, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PULX": {
		macro: "PULX",
		modes: {
			INH: [0x38, 1, 5]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"PULY": {
		macro: "PULY",
		modes: {
			INH: [0x1838, 2, 6]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"ROL": {
		macro: "ROL",
		modes: {
			EXT: [0x79, 3, 6],
			INDX: [0x69, 2, 6],
			INDY: [0x1869, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ROLA": {
		macro: "ROLA",
		modes: {
			INH: [0x49, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ROLB": {
		macro: "ROLB",
		modes: {
			INH: [0x59, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"ROR": {
		macro: "ROR",
		modes: {
			EXT: [0x76, 3, 6],
			INDX: [0x66, 2, 6],
			INDY: [0x1866, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"RORA": {
		macro: "RORA",
		modes: {
			INH: [0x46, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"RORB": {
		macro: "RORB",
		modes: {
			INH: [0x56, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"RTI": {
		macro: "RTI",
		modes: {
			INH: [0x3B, 1, 12]
		},
		conditions: {
			"S": null,
			"X": null,
			"H": null,
			"I": null,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"RTS": {
		macro: "RTS",
		modes: {
			INH: [0x39, 1, 5]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"SBA": {
		macro: "SBA",
		modes: {
			INH: [0x10, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"SEC": {
		macro: "SEC",
		modes: {
			INH: [0x0D, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": 1
		}
	},
	"SEI": {
		macro: "SEI",
		modes: {
			INH: [0x0F, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": 1,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"SEV": {
		macro: "SEV",
		modes: {
			INH: [0x0B, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": 1,
			"C": undefined
		}
	},
	"STAA": {
		macro: "STAA",
		modes: {
			DIR: [0x97, 2, 3],
			EXT: [0xB7, 3, 4],
			INDX: [0xA7, 2, 4],
			INDY: [0x18A7, 3, 5]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"STAB": {
		macro: "STAB",
		modes: {
			DIR: [0xD7, 2, 3],
			EXT: [0xF7, 3, 4],
			INDX: [0xE7, 2, 4],
			INDY: [0x18E7, 3, 5]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"STD": {
		macro: "STD",
		modes: {
			DIR: [0xDD, 2, 4],
			EXT: [0xFD, 3, 5],
			INDX: [0xED, 2, 5],
			INDY: [0x18ED, 3, 6]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"STOP": {
		macro: "STOP",
		modes: {
			INH: [0xCF, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"STS": {
		macro: "STS",
		modes: {
			DIR: [0x9F, 2, 4],
			EXT: [0xBF, 3, 5],
			INDX: [0xAF, 2, 5],
			INDY: [0x18AF, 3, 6]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"STX": {
		macro: "STX",
		modes: {
			DIR: [0xDF, 2, 4],
			EXT: [0xFF, 3, 5],
			INDX: [0xEF, 2, 5],
			INDY: [0xCDEF, 3, 6]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"STY": {
		macro: "STY",
		modes: {
			DIR: [0x18DF, 3, 5],
			EXT: [0x18FF, 4, 6],
			INDX: [0x1AEF, 3, 6],
			INDY: [0x18EF, 3, 6]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
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
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"SWI": {
		macro: "SWI",
		modes: {
			INH: [0x3F, 1, 14]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": 1,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"TAB": {
		macro: "TAB",
		modes: {
			INH: [0x16, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"TAP": {
		macro: "TAP",
		modes: {
			INH: [0x6, 1, 2]
		},
		conditions: {
			"S": null,
			"X": null,
			"H": null,
			"I": null,
			"N": null,
			"Z": null,
			"V": null,
			"C": null
		}
	},
	"TBA": {
		macro: "TBA",
		modes: {
			INH: [0x17, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": undefined
		}
	},
	"TEST": {
		macro: "TEST",
		modes: {
			INH: [0x0, 1, 0]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"TPA": {
		macro: "TPA",
		modes: {
			INH: [0x7, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"TST": {
		macro: "TST",
		modes: {
			EXT: [0x7D, 3, 6],
			INDX: [0x6D, 2, 6],
			INDY: [0x186D, 3, 7]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": 0
		}
	},
	"TSTA": {
		macro: "TSTA",
		modes: {
			INH: [0x4D, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": 0
		}
	},
	"TSTB": {
		macro: "TSTB",
		modes: {
			INH: [0x5D, 1, 2]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": null,
			"Z": null,
			"V": 0,
			"C": 0
		}
	},
	"TSX": {
		macro: "TSX",
		modes: {
			INH: [0x30, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"TSY": {
		macro: "TSY",
		modes: {
			INH: [0x1830, 2, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"TXS": {
		macro: "TXS",
		modes: {
			INH: [0x35, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"TYS": {
		macro: "TYS",
		modes: {
			INH: [0x1835, 2, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"WAI": {
		macro: "WAI",
		modes: {
			INH: [0x3E, 1, 0]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"XGDX": {
		macro: "XGDX",
		modes: {
			INH: [0x8F, 1, 3]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	},
	"XGDY": {
		macro: "XGDY",
		modes: {
			INH: [0x188F, 2, 4]
		},
		conditions: {
			"S": undefined,
			"X": undefined,
			"H": undefined,
			"I": undefined,
			"N": undefined,
			"Z": undefined,
			"V": undefined,
			"C": undefined
		}
	}
};
