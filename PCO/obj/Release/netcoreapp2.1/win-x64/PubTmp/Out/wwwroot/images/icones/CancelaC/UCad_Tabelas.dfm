object FCad_Tabelas: TFCad_Tabelas
  Left = 170
  Top = 57
  Width = 618
  Height = 496
  BorderWidth = 1
  Caption = 'Cadastro de Tabelas'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  Position = poScreenCenter
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object Label16: TLabel
    Left = 10
    Top = 2
    Width = 58
    Height = 13
    Caption = 'Cod_Tabela'
  end
  object Label18: TLabel
    Left = 10
    Top = 38
    Width = 39
    Height = 13
    Caption = 'Localiza'
  end
  object Label19: TLabel
    Left = 178
    Top = 38
    Width = 80
    Height = 13
    Caption = 'Banco de Dados'
  end
  object Label17: TLabel
    Left = 186
    Top = 2
    Width = 48
    Height = 13
    Caption = 'Descri??o'
  end
  object Label20: TLabel
    Left = 10
    Top = 76
    Width = 38
    Height = 13
    Caption = 'Campos'
  end
  object SpeedButton4: TSpeedButton
    Left = 161
    Top = 436
    Width = 91
    Height = 27
    Caption = '&Procurar'
    Glyph.Data = {
      1E060000424D1E06000000000000360000002800000018000000150000000100
      180000000000E8050000C40E0000C40E00000000000000000000FFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFF000000000000000000000000000000000000000000FFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000000000
      00000000FFFFFFFFFFFFFFFFFF000000FFFFFF00000000000000000000000000
      0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000FFFFFF
      000000000000000000000000FFFFFFFFFFFFFFFFFF000000FFFFFF0000000000
      00000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00
      0000000000FFFFFF000000000000000000000000FFFFFFFFFFFFFFFFFF000000
      FFFFFF000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFF000000000000FFFFFF000000000000000000000000FFFFFFFF
      FFFFFFFFFF000000000000000000000000000000000000000000000000000000
      000000FFFFFF0000000000000000000000000000000000000000000000000000
      00000000FFFFFFFFFFFFFFFFFF00000000000000000000000000000000000000
      0000000000000000000000FFFFFF000000000000000000000000000000000000
      000000000000000000000000FFFFFFFFFFFFFFFFFF000000000000FFFFFF0000
      00000000000000000000000000000000000000000000000000000000FFFFFF00
      0000000000000000000000000000000000000000FFFFFFFFFFFFFFFFFF000000
      000000FFFFFF000000000000000000000000000000C0C0C0C0C0C00000000000
      00000000FFFFFF000000000000000000000000000000000000000000FFFFFFFF
      FFFFFFFFFF000000000000FFFFFF000000000000000000000000000000C0C0C0
      C0C0C0000000000000000000FFFFFF0000000000000000000000000000000000
      00000000FFFFFFFFFFFFFFFFFF000000000000FFFFFF00000000000000000000
      0000000000C0C0C0C0C0C0000000000000000000FFFFFF000000000000000000
      000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF0000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000000000FFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFF000000000000FFFFFF000000000000000000000000
      000000FFFFFF000000000000FFFFFF000000000000000000000000000000FFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000000000000000000000
      0000000000000000000000FFFFFF000000000000000000000000000000000000
      000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000000000
      00000000000000000000000000000000000000FFFFFF00000000000000000000
      0000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFF000000000000000000000000FFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFF000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000FFFFFF000000000000FFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFF000000FFFFFF000000000000FFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000FFFFFF00
      0000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000FFFFFF000000000000
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FF000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000
      0000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
      FFFF}
    OnClick = SpeedButton4Click
  end
  object Label1: TLabel
    Left = 346
    Top = 38
    Width = 31
    Height = 13
    Caption = 'Ordem'
  end
  object DBEdit1: TDBEdit
    Left = 10
    Top = 16
    Width = 121
    Height = 21
    DataField = 'Cod_Tabela'
    DataSource = DM.D_Tabela
    TabOrder = 0
  end
  object DBEdit6: TDBEdit
    Left = 10
    Top = 52
    Width = 153
    Height = 21
    DataField = 'Localiza'
    DataSource = DM.D_Tabela
    TabOrder = 1
  end
  object DBEdit7: TDBEdit
    Left = 178
    Top = 52
    Width = 157
    Height = 21
    DataField = 'Banco_de_Dados'
    DataSource = DM.D_Tabela
    TabOrder = 2
  end
  object DBEdit2: TDBEdit
    Left = 148
    Top = 16
    Width = 443
    Height = 21
    DataField = 'Descricao'
    DataSource = DM.D_Tabela
    TabOrder = 3
  end
  object DBMemo3: TDBMemo
    Left = 9
    Top = 91
    Width = 582
    Height = 334
    Hint = 'PRESSIONE 2 CLIQUES PARA VIZUALIZA??O AMPLIADA'
    DataField = 'Campos'
    DataSource = DM.D_Tabela
    ParentShowHint = False
    ScrollBars = ssBoth
    ShowHint = True
    TabOrder = 4
  end
  object DBNavigator2: TDBNavigator
    Left = 11
    Top = 442
    Width = 140
    Height = 21
    DataSource = DM.D_Tabela
    VisibleButtons = [nbInsert, nbDelete, nbEdit, nbPost, nbCancel]
    TabOrder = 5
  end
  object DBEdit3: TDBEdit
    Left = 346
    Top = 52
    Width = 55
    Height = 21
    DataField = 'Ordem'
    DataSource = DM.D_Tabela
    TabOrder = 6
  end
  object BitBtn1: TBitBtn
    Left = 272
    Top = 437
    Width = 92
    Height = 25
    Caption = '&Fechar'
    TabOrder = 7
    Kind = bkClose
  end
end
