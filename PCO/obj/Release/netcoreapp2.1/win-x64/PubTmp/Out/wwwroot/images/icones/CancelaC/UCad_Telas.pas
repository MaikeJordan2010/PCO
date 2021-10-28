unit UCad_Telas;

interface

uses
  Windows, Messages, SysUtils, Classes, Graphics, Controls, Forms, Dialogs,
  StdCtrls, Buttons, ExtCtrls, DBCtrls, Mask, DB;

type
  TFCad_Telas = class(TForm)
    Label22: TLabel;
    DBEdit11: TDBEdit;
    Label23: TLabel;
    Bevel8: TBevel;
    DBEdit14: TDBEdit;
    DBNavigator7: TDBNavigator;
    SpeedButton1: TSpeedButton;
    BitBtn2: TBitBtn;
    SpeedButton3: TSpeedButton;
    Panel1: TPanel;
    DBImage1: TDBImage;
    DBEdit1: TDBEdit;
    Label1: TLabel;
    BitBtn1: TBitBtn;
    procedure SpeedButton3Click(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure BitBtn2Click(Sender: TObject);
    procedure FormShow(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FCad_Telas: TFCad_Telas;

implementation
Uses UGet_Telas,UDM, UVizualiza_Tela;
{$R *.DFM}

procedure TFCad_Telas.SpeedButton3Click(Sender: TObject);
begin
   FGet_Telas.ShowModal;
end;

procedure TFCad_Telas.SpeedButton1Click(Sender: TObject);
begin
  if DM.ado_Tela.State = DsEdit then begin
     with TOpenDialog.Create(nil) do begin
       Execute;
       DM.ado_TelaImagem.LoadFromFile(FileName);
     end;
  end;
end;

procedure TFCad_Telas.BitBtn2Click(Sender: TObject);
begin
   FVisualiza_Tela.ShowModal;    
end;

procedure TFCad_Telas.FormShow(Sender: TObject);
begin
   FGet_Telas.ShowModal;
end;

end.
